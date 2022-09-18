import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";

const TableName = process.env.LICENSES_TABLE!;
const dynamodb = new DynamoDBClient({});

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const id = event.queryStringParameters!["id"];
  if (!id) {
    return {
      statusCode: 400,
      body: "Missing query parameter 'id'",
    };
  }

  let userItem;
  try {
    userItem = await getUserItem(id);

    if (!userItem) {
      userItem = await createUserItem(id);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ userItem }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    console.log("Error while checking/creating user", error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error, id }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Content-Type": "application/json",
      },
    };
  }
};

// todo: Use assymetrical cryptography to return valid or not
async function getUserItem(id: string) {
  const item = await dynamodb.send(
    new GetItemCommand({
      TableName,
      Key: {
        id: { S: id },
      },
    })
  );

  if (item.Item) {
    return item.Item;
  }

  return undefined;
}

async function createUserItem(id: string) {
  const createdAt = new Date().toISOString();
  const command = new PutItemCommand({
    TableName,
    Item: {
      id: { S: id },
      createdAt: { S: createdAt },
    },
  });

  await dynamodb.send(command);

  return {
    id,
    createdAt,
  };
}
