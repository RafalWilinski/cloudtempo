import { APIGatewayProxyEvent } from "aws-lambda";

export interface Parameters {
  encryptedArn: string;
}

export interface BadRequestResponse {
  statusCode: number;
  body: string;
}

export function getQueryStringParameters(
  event: APIGatewayProxyEvent
): Parameters | BadRequestResponse {
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
      body: JSON.stringify({ error: "Missing query parameter 'id'" }),
    };
  }

  return {
    encryptedArn,
  };
}
