import { ulid } from "ulid";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { getQueryStringParameters } from "../lib/qs";
import { AWSLambda } from "@sentry/serverless";

AWSLambda.init({
  dsn: "https://4a94f23f925e4c139421bf1760fdd0e5@o1413901.ingest.sentry.io/6753871",
  tracesSampleRate: 1.0,
});

const TableName = process.env.LICENSES_TABLE!;
const dynamodb = new DynamoDBClient({});

export const _handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const body = JSON.parse(event.body ?? "{}");
  const parametersOrBadRequest = getQueryStringParameters(event);

  if ("statusCode" in parametersOrBadRequest) {
    return parametersOrBadRequest;
  }

  const feedbackId = ulid();
  const item = {
    id: `FEEDBACK#${feedbackId}`,
    createdAt: new Date().toISOString(),
    body: body.message,
    arn: parametersOrBadRequest.encryptedArn,
  };

  await dynamodb.send(
    new PutItemCommand({
      TableName,
      Item: marshall(item),
    })
  );

  return {
    statusCode: 200,
    body: JSON.stringify({ feedbackId }),
  };
};
export const handler = AWSLambda.wrapHandler(_handler);
