import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";

const TableName = process.env.LICENSES_TABLE!;
const dynamodb = new DynamoDBClient({});

const SECRET_CONST = "cl0udt3mP0";

interface UserItem {
  id: string;
  createdAt: string;
  licenseKey?: string;
}

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const body = JSON.parse(event.body ?? "{}");

  console.log(body);

  const item = marshall({
    ...body,
    id: `EVENT#${body.meta.event_name}#${body.data.id}`,
  });

  await dynamodb.send(
    new PutItemCommand({
      TableName,
      Item: item,
    })
  );

  return {
    statusCode: 200,
    body: "OK",
  };
};
