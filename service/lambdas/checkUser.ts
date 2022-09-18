import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";
import { AES, enc } from "crypto-js";
import { corsHeaders } from "../lib/cors";
import { decodeArn } from "../lib/arn";

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
  if (!event.queryStringParameters) {
    return {
      statusCode: 400,
      body: "Please provide query string parameters",
    };
  }

  const encryptedArn = event.queryStringParameters["id"];
  if (!encryptedArn) {
    return {
      statusCode: 400,
      body: "Missing query parameter 'id'",
    };
  }

  try {
    let userItem;
    const decryptedUserArn = AES.decrypt(encryptedArn, SECRET_CONST).toString(
      enc.Utf8
    );
    const decodedArn = decodeArn(decryptedUserArn);

    console.log({ decodedArn, decryptedUserArn, encryptedArn });

    userItem = await getUserItem(encryptedArn);

    if (!userItem) {
      userItem = await createUserItem(encryptedArn, decryptedUserArn);
    }

    if (userItem.licenseKey) {
      // todo: check if license is valid
      const licenseKeyEncrypted = AES.encrypt(
        userItem.licenseKey,
        SECRET_CONST
      ).toString();

      return {
        statusCode: 200,
        body: JSON.stringify({ ok: licenseKeyEncrypted }),
        headers: corsHeaders,
      };
    }

    const accountIdEncrypted = AES.encrypt(
      decodeArn(decryptedUserArn).accountId,
      SECRET_CONST
    ).toString();

    const createdAtEncrypted = AES.encrypt(
      userItem.createdAt,
      SECRET_CONST
    ).toString();

    return {
      statusCode: 200,
      body: JSON.stringify({ n: accountIdEncrypted, c: createdAtEncrypted }),
      headers: corsHeaders,
    };
  } catch (error) {
    console.log("Error while checking/creating user", error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: (error as any).message, id: encryptedArn }),
      headers: corsHeaders,
    };
  }
};

async function getUserItem(id: string): Promise<UserItem | undefined> {
  const item = await dynamodb.send(
    new GetItemCommand({
      TableName,
      Key: {
        id: { S: `ID#${id}` },
      },
    })
  );

  if (item.Item) {
    return {
      id: item.Item.id.S!,
      createdAt: item.Item.createdAt.S!,
      licenseKey: item.Item.licenseKey ? item.Item.licenseKey.S : undefined,
    };
  }

  return undefined;
}

async function createUserItem(
  encryptedArn: string,
  decryptedUserArn: string
): Promise<UserItem> {
  const createdAt = new Date().toISOString();

  const command = new PutItemCommand({
    TableName,
    Item: {
      id: { S: `ID#${encryptedArn}` },
      arn: { S: decryptedUserArn },
      createdAt: { S: createdAt },
    },
  });

  await dynamodb.send(command);

  return {
    id: encryptedArn,
    createdAt,
  };
}
