import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";
import { AES, enc } from "crypto-js";

const TableName = process.env.LICENSES_TABLE!;
const dynamodb = new DynamoDBClient({});
const SECRET_CONST = "cl0udt3mP0";

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

    console.log(userItem);

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

async function getUserItem(id: string) {
  const item = await dynamodb.send(
    new GetItemCommand({
      TableName,
      Key: {
        id: { S: `ID#${id}` },
      },
    })
  );

  if (item.Item) {
    const arn = JSON.parse(
      AES.decrypt(item.Item.arn.S!, SECRET_CONST).toString(enc.Utf8)
    );

    return arn;
  }

  return undefined;
}

async function createUserItem(id: string) {
  const createdAt = new Date().toISOString();
  const { arn } = JSON.parse(AES.decrypt(id, SECRET_CONST).toString(enc.Utf8));

  const command = new PutItemCommand({
    TableName,
    Item: {
      id: { S: `ID#${id}` },
      arn: { S: arn },
      createdAt: { S: createdAt },
    },
  });

  await dynamodb.send(command);

  return {
    id,
    arn,
    createdAt,
  };
}
