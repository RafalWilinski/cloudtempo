import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda-nodejs";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as targets from "aws-cdk-lib/aws-route53-targets";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";

export class CloudTempoLicensingAPI extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    /// ----------- LICENSE / USER MGMT -------------
    const licensesTable = new dynamodb.Table(this, "LicensesTable", {
      partitionKey: {
        name: "id",
        type: dynamodb.AttributeType.STRING,
      },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });
    licensesTable.addGlobalSecondaryIndex({
      indexName: "licenseKey",
      partitionKey: {
        name: "licenseKey",
        type: dynamodb.AttributeType.STRING,
      },
    });
    licensesTable.addGlobalSecondaryIndex({
      indexName: "subscriptionId",
      partitionKey: {
        name: "subscriptionId",
        type: dynamodb.AttributeType.STRING,
      },
    });

    const checkUserEndpoint = new lambda.NodejsFunction(
      this,
      "CheckUserEndpoint",
      {
        entry: "./lambdas/checkUser.ts",
        handler: "handler",
        environment: {
          LICENSES_TABLE: licensesTable.tableName,
        },
        memorySize: 512,
      }
    );
    licensesTable.grantReadWriteData(checkUserEndpoint);

    const activateUserEndpoint = new lambda.NodejsFunction(
      this,
      "ActivateUserEndpoint",
      {
        entry: "./lambdas/activateUser.ts",
        handler: "handler",
        environment: {
          LICENSES_TABLE: licensesTable.tableName,
        },
        memorySize: 512,
      }
    );
    licensesTable.grantReadWriteData(activateUserEndpoint);

    const webhookEndpoint = new lambda.NodejsFunction(this, "WebhookEndpoint", {
      entry: "./lambdas/webhook.ts",
      handler: "handler",
      environment: {
        LICENSES_TABLE: licensesTable.tableName,
      },
      memorySize: 512,
    });
    licensesTable.grantReadWriteData(webhookEndpoint);

    const api = new apigateway.RestApi(this, "Api", {
      restApiName: "MyApi",
    });
    const userResource = api.root.addResource("user");
    userResource.addMethod(
      "GET",
      new apigateway.LambdaIntegration(checkUserEndpoint)
    );

    userResource
      .addResource("activate")
      .addMethod("GET", new apigateway.LambdaIntegration(activateUserEndpoint));

    api.root
      .addResource("webhook")
      .addMethod("POST", new apigateway.LambdaIntegration(webhookEndpoint));

    const certificate = Certificate.fromCertificateArn(
      this,
      "Certificate",
      "arn:aws:acm:us-east-1:085108115628:certificate/3c5c91c3-11f8-43cb-b3f5-255dac1c92d1"
    );
    api.addDomainName("ApiDomainName", {
      domainName: "api.cloudtempo.dev",
      certificate,
    });

    const zone = route53.HostedZone.fromHostedZoneAttributes(
      this,
      "ApiCloudtangoDevHZ",
      {
        hostedZoneId: "Z07244831H2LT0J4E34UU",
        zoneName: "api.cloudtempo.dev",
      }
    );

    new route53.ARecord(this, "ApiCloudtempoDevApiAlias", {
      zone,
      target: route53.RecordTarget.fromAlias(new targets.ApiGateway(api)),
    });

    /// ----------- END LICENSE / USER MGMT -------------
  }
}
