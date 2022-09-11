import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { DynamoDBClient, paginateListTables } from "@aws-sdk/client-dynamodb";
import {
  S3Client,
  ListBucketsCommand,
  ListBucketsCommandOutput,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { LambdaClient, paginateListFunctions } from "@aws-sdk/client-lambda";

const ddbClient = new DynamoDBClient({});
const s3Client = new S3Client({});
const lambdaClient = new LambdaClient({});

interface Document {
  arn?: string;
  tags?: string[];
  name?: string;
  description?: string;
  awsService: string;
  region: string;
}

const region = process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION!;

export const handler = async (
  _event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const [bucketDocuments, tablesDocuments, functionsDocuments] =
    await Promise.all([
      indexBuckets(),
      indexDynamoDBTables(),
      indexFunctions(),
    ]);

  const documents = [
    ...bucketDocuments,
    ...tablesDocuments,
    ...functionsDocuments,
  ];

  await s3Client.send(
    new PutObjectCommand({
      Bucket: process.env.DUMP_BUCKET!,
      Key: "index.json",
      Body: JSON.stringify(documents),
    })
  );

  return {
    statusCode: 200,
    body: "OK",
  };
};

async function indexBuckets(): Promise<Document[]> {
  let firstRun = true;
  let listBucketsResult: ListBucketsCommandOutput;
  let paginationToken;
  let documents: Document[] = [];

  do {
    firstRun = false;
    listBucketsResult = await s3Client.send(
      new ListBucketsCommand({
        ContinuationToken: paginationToken,
      })
    );

    documents = [
      ...documents,
      ...(listBucketsResult.Buckets ?? []).map((bucket) => ({
        name: bucket.Name,
        awsService: "s3",
        region,
      })),
    ];

    // todo
    paginationToken = undefined;
  } while (firstRun || paginationToken);

  return documents;
}

async function indexFunctions(): Promise<Document[]> {
  let documents: Document[] = [];

  const paginatorConfig = {
    client: lambdaClient,
    pageSize: 100,
  };
  const commandParams = {};
  const paginator = paginateListFunctions(paginatorConfig, commandParams);

  for await (const page of paginator) {
    documents = [
      ...documents,
      ...(page.Functions ?? []).map((fn) => ({
        name: fn.FunctionName,
        arn: fn.FunctionArn,
        description: fn.Description,
        awsService: "lambda",
        region,
      })),
    ];
  }

  return documents;
}

async function indexDynamoDBTables(): Promise<Document[]> {
  let documents: Document[] = [];

  const paginatorConfig = {
    client: ddbClient,
    pageSize: 100,
  };
  const commandParams = {};
  const paginator = paginateListTables(paginatorConfig, commandParams);

  for await (const page of paginator) {
    documents = [
      ...documents,
      ...(page.TableNames ?? []).map((name) => ({
        name,
        awsService: "dynamodb",
        region,
      })),
    ];
  }

  return documents;
}
