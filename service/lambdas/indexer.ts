import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { indexBuckets, putObject } from "../lib/s3";
import { indexDynamoDBTables } from "../lib/dynamodb";
import { indexFunctions } from "../lib/lambda";
import { indexCloudformationStacks } from "../lib/cloudformation";
import { indexCloudwatchLogGroups } from "../lib/cloudwatchLogs";
import { Document } from "../lib/document";
import { Credentials } from "@aws-sdk/types";

const regions = ["us-east-1", "us-west-2", "eu-central-1"];

export const handler = async (
  _event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const regionsData = await Promise.all(
    regions.map((region) => processRegion(region))
  );

  // Flatten
  const allDocuments = ([] as Document[]).concat.apply(
    [],
    regionsData.map((r) => r.documents)
  );

  await putObject("index.json", allDocuments);

  return {
    statusCode: 200,
    body: JSON.stringify(
      regionsData.map((r) => ({
        ...r,
        documents: r.documents.length,
      }))
    ),
  };
};

export async function processRegion(region: string, credentials?: Credentials) {
  const [
    bucketDocuments,
    tablesDocuments,
    functionsDocuments,
    cloudformationStacks,
    cloudwatchLogs,
  ] = await Promise.all([
    indexBuckets(region, credentials),
    indexDynamoDBTables(region, credentials),
    indexFunctions(region, credentials),
    indexCloudformationStacks(region, credentials),
    indexCloudwatchLogGroups(region, credentials),
  ]);

  const documents = [
    ...bucketDocuments,
    ...tablesDocuments,
    ...functionsDocuments,
    ...cloudformationStacks,
    ...cloudwatchLogs,
  ];

  // await putObject(`${region}.json`, documents, credentials);

  return {
    documents,
    cloudformationStacksCount: cloudformationStacks.length,
    bucketsCount: bucketDocuments.length,
    dynamoDBTablesCount: tablesDocuments.length,
    lambdaFunctionsCount: functionsDocuments.length,
    cloudwatchLogsCount: cloudwatchLogs.length,
  };
}
