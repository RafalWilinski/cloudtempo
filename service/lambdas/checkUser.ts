import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";
import { AES, enc } from "crypto-js";
import { corsHeaders } from "../lib/cors";
import { decodeArn } from "../lib/arn";
import { getQueryStringParameters } from "../lib/qs";
import { AWSLambda } from "@sentry/serverless";

AWSLambda.init({
  dsn: "https://4a94f23f925e4c139421bf1760fdd0e5@o1413901.ingest.sentry.io/6753871",
  tracesSampleRate: 1.0,
});

const TableName = process.env.LICENSES_TABLE!;
const dynamodb = new DynamoDBClient({});
const SECRET_CONST = "cl0udt3mP0";

interface UserItem {
  id: string;
  createdAt: string;
  licenseKey?: string;
}

const _handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const parametersOrBadRequest = getQueryStringParameters(event);

  if ("statusCode" in parametersOrBadRequest) {
    return parametersOrBadRequest;
  }

  const encryptedArn = parametersOrBadRequest.encryptedArn;

  try {
    let userItem;
    const decryptedUserArn = AES.decrypt(encryptedArn, SECRET_CONST).toString(
      enc.Utf8
    );
    const decodedArn = decodeArn(decryptedUserArn);

    console.log({ decodedArn, decryptedUserArn, encryptedArn });

    userItem = await getUserItem(decryptedUserArn);

    if (!userItem) {
      userItem = await createUserItem(decryptedUserArn);
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
    await updateLastCheckedAt(item.Item);

    return {
      id: item.Item.id.S!,
      createdAt: item.Item.createdAt.S!,
      licenseKey: item.Item.licenseKey ? item.Item.licenseKey.S : undefined,
    };
  }

  return undefined;
}

async function createUserItem(decryptedUserArn: string): Promise<UserItem> {
  const createdAt = new Date().toISOString();

  const command = new PutItemCommand({
    TableName,
    Item: {
      id: { S: `ID#${decryptedUserArn}` },
      arn: { S: decryptedUserArn },
      createdAt: { S: createdAt },
    },
  });

  await dynamodb.send(command);

  return {
    id: decryptedUserArn,
    createdAt,
  };
}

async function updateLastCheckedAt(item: any) {
  const command = new PutItemCommand({
    TableName,
    Item: {
      ...item,
      lastCheckedAt: { S: new Date().toISOString() },
    },
  });

  await dynamodb.send(command);
}

export const handler = AWSLambda.wrapHandler(_handler);
