import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda-nodejs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as targets from "aws-cdk-lib/aws-route53-targets";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { FunctionUrlAuthType } from "aws-cdk-lib/aws-lambda";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Duration } from "aws-cdk-lib";
import * as events from "aws-cdk-lib/aws-events";
import { LambdaFunction } from "aws-cdk-lib/aws-events-targets";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";

export class SearchServiceStack extends cdk.Stack {
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
      // or - route53.RecordTarget.fromAlias(new alias.ApiGatewayDomain(domainName)),
    });

    /// ----------- END LICENSE / USER MGMT -------------

    const dumpBucket = new s3.Bucket(this, "DumpBucket", {
      enforceSSL: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      encryption: s3.BucketEncryption.S3_MANAGED,
    });

    const searchEndpoint = new lambda.NodejsFunction(this, "SearchEndpoint", {
      entry: "./lambdas/search.ts",
      handler: "handler",
      environment: {
        DUMP_BUCKET: dumpBucket.bucketName,
      },
      memorySize: 512,
    });
    dumpBucket.grantRead(searchEndpoint);

    const searchUrl = searchEndpoint.addFunctionUrl({
      authType: FunctionUrlAuthType.NONE,
    }).url;

    new cdk.CfnOutput(this, "SearchUrl", {
      value: searchUrl,
    });

    const indexer = new lambda.NodejsFunction(this, "Indexer", {
      entry: "./lambdas/indexer.ts",
      handler: "handler",
      environment: {
        DUMP_BUCKET: dumpBucket.bucketName,
      },
      timeout: Duration.seconds(30),
      memorySize: 2048,
    });
    dumpBucket.grantReadWrite(indexer);

    indexer.addToRolePolicy(
      new PolicyStatement({
        actions: [
          "lambda:DescribeFunction",
          "s3:DescribeBucket",
          "dynamodb:DescribeTable",
          "s3:List*",
          "lambda:List*",
          "dynamodb:List*",
          "ec2:List*",
          "cloudformation:List*",
          "logs:DescribeLogGroups",
        ],
        resources: ["*"],
      })
    );

    const indexerTriggerUrl = indexer.addFunctionUrl({
      authType: FunctionUrlAuthType.NONE,
    }).url;

    const rule = new events.Rule(this, "IndexerSchedule", {
      schedule: events.Schedule.rate(cdk.Duration.minutes(60)),
    });
    rule.addTarget(new LambdaFunction(indexer));

    new cdk.CfnOutput(this, "IndexerTriggerUrl", {
      value: indexerTriggerUrl,
    });
  }
}
