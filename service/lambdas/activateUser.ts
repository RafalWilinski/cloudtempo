import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  QueryCommand,
} from "@aws-sdk/client-dynamodb";
import { AES } from "crypto-js";
import { corsHeaders } from "../lib/cors";

const TableName = process.env.LICENSES_TABLE!;
const dynamodb = new DynamoDBClient({});
const SECRET_CONST = "cl0udt3mP0";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  if (!event.queryStringParameters) {
    return {
      statusCode: 400,
      body: "Please provide query string parameters",
    };
  }

  const encryptedUserArn = event.queryStringParameters["id"];
  if (!encryptedUserArn) {
    return {
      statusCode: 400,
      body: "Missing query parameter 'id'",
    };
  }
  const licenseKey = event.queryStringParameters!["licenseKey"];
  if (!licenseKey) {
    return {
      statusCode: 400,
      body: "Missing query parameter 'licenseKey'",
    };
  }

  let licenseKeyItem;
  try {
    licenseKeyItem = await getLicenseKeyItem(licenseKey);

    if (!licenseKeyItem) {
      return {
        statusCode: 400,
        body: "Provided licenseKey does not exist",
      };
    }

    const associatedUsers = await getLicenseKeyPartition(licenseKey);

    if (associatedUsers.length > 5) {
      return {
        statusCode: 400,
        body: "You've already associated 5 users with this licenseKey",
      };
    }

    await associateUserWithLicense(encryptedUserArn, licenseKey);

    const licenseKeyEncrypted = AES.encrypt(
      licenseKey,
      SECRET_CONST
    ).toString();

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: licenseKeyEncrypted }),
      headers: corsHeaders,
    };
  } catch (error) {
    console.log("Error while checking/creating user", error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error, id }),
      headers: corsHeaders,
    };
  }
};

async function getLicenseKeyItem(licenseKey: string) {
  const item = await dynamodb.send(
    new GetItemCommand({
      TableName,
      Key: {
        id: { S: `LICENSEKEY#${licenseKey}` },
      },
    })
  );

  if (!item.Item) {
    return null;
  }

  return item.Item;
}

async function getLicenseKeyPartition(licenseKey: string) {
  const queryParam = new QueryCommand({
    TableName,
    KeyConditionExpression: "licenseKey = :licenseKey",
    ExpressionAttributeValues: {
      ":licenseKey": { S: licenseKey },
    },
    IndexName: "licenseKey",
  });
  const response = await dynamodb.send(queryParam);

  return response.Items ?? [];
}

async function associateUserWithLicense(id: string, licenseKey: string) {
  const currentUserItem = await dynamodb.send(
    new GetItemCommand({
      TableName,
      Key: {
        id: { S: `ID#${id}` },
      },
    })
  );

  await dynamodb.send(
    new PutItemCommand({
      TableName,
      Item: {
        ...(currentUserItem.Item ?? {}),
        licenseKey: { S: licenseKey },
      },
    })
  );
}
