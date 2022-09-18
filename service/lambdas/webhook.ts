import { v4 as uuidv4 } from "uuid";
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
  const item = {
    ...body,
    id: `EVENT#${body.meta.event_name}#${body.data.id}`,
    createdAt: new Date().toISOString(),
  };

  if (body.meta.event_name === "subscription_created") {
    item.licenseKey = uuidv4();
  }

  if (body.meta.event_name.includes("subscription_")) {
    item.subscriptionId = body.data.id;
  }

  console.log(item);

  await dynamodb.send(
    new PutItemCommand({
      TableName,
      Item: marshall(item),
    })
  );

  return {
    statusCode: 200,
    body: "OK",
  };
};
