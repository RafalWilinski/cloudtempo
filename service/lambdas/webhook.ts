import { v4 as uuidv4 } from "uuid";
import * as postmark from "postmark";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { WebhookEvent } from "../lib/types/LemonSqueezy";
import { AWSLambda } from "@sentry/serverless";

AWSLambda.init({
  dsn: "https://4a94f23f925e4c139421bf1760fdd0e5@o1413901.ingest.sentry.io/6753871",
  tracesSampleRate: 1.0,
});

const TableName = process.env.LICENSES_TABLE!;
const dynamodb = new DynamoDBClient({});

const SECRET_CONST = "cl0udt3mP0";
const postmarkServerToken = "4b39046d-962f-4c45-8f7a-b28392743765";

interface UserItem {
  id: string;
  createdAt: string;
  licenseKey?: string;
}

const _handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const body: WebhookEvent = JSON.parse(event.body ?? "{}");
  const item = {
    ...body,
    id: `EVENT#${body.meta.event_name}#${body.data.id}`,
    createdAt: new Date().toISOString(),
  };

  if (body.meta.event_name === "subscription_created") {
    const key = uuidv4();
    (item as any).licenseKey = uuidv4();

    await createLicense(
      body.data.attributes.user_email,
      body.data.attributes.user_name,
      key
    );
  }

  if (body.meta.event_name.includes("subscription_")) {
    (item as any).subscriptionId = body.data.id;
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

async function createLicense(
  recipientEmail: string,
  name: string,
  licenseKey: string
) {
  const email = new postmark.ServerClient(postmarkServerToken);

  await email.sendEmailWithTemplate({
    From: "rafal@cloudtempo.dev",
    To: recipientEmail,
    TemplateAlias: "license",
    TemplateModel: {
      name,
      license_key: licenseKey,
    },
  });
}

export const handler = AWSLambda.wrapHandler(_handler);
