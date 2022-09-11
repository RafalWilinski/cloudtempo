import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda-nodejs";
import * as s3 from "aws-cdk-lib/aws-s3";
import { FunctionUrlAuthType } from "aws-cdk-lib/aws-lambda";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Duration } from "aws-cdk-lib";

export class SearchServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

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
          "dynamodb:ListTables",
          "s3:ListBuckets",
          "lambda:ListFunctions",
          "lambda:DescribeFunction",
          "s3:DescribeBucket",
          "dynamodb:DescribeTable",
          "s3:List*",
          "lambda:List*",
          "dynamodb:List*",
        ],
        resources: ["*"],
      })
    );

    const searchUrl = searchEndpoint.addFunctionUrl({
      authType: FunctionUrlAuthType.NONE,
    }).url;

    const indexerTriggerUrl = indexer.addFunctionUrl({
      authType: FunctionUrlAuthType.NONE,
    }).url;

    new cdk.CfnOutput(this, "SearchUrl", {
      value: searchUrl,
    });

    new cdk.CfnOutput(this, "IndexerTriggerUrl", {
      value: indexerTriggerUrl,
    });
  }
}
