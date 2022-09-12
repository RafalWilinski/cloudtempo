import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { indexBuckets, putObject } from "../lib/s3";
import { indexDynamoDBTables } from "../lib/dynamodb";
import { indexFunctions } from "../lib/lambda";
import { indexCloudformationStacks } from "../lib/cloudformation";

const region = process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION!;

export const handler = async (
  _event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const [
    bucketDocuments,
    tablesDocuments,
    functionsDocuments,
    cloudformationStacks,
  ] = await Promise.all([
    indexBuckets(region),
    indexDynamoDBTables(region),
    indexFunctions(region),
    indexCloudformationStacks(region),
  ]);

  const documents = [
    ...bucketDocuments,
    ...tablesDocuments,
    ...functionsDocuments,
    ...cloudformationStacks,
  ];

  await putObject("index.json", documents);

  return {
    statusCode: 200,
    body: JSON.stringify({
      cloudformationStacksCount: cloudformationStacks.length,
      bucketsCount: bucketDocuments.length,
      dynamoDBTablesCount: tablesDocuments.length,
      lambdaFunctionsCount: functionsDocuments.length,
    }),
  };
};
