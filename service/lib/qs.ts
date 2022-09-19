import { APIGatewayProxyEvent } from "aws-lambda";
import { corsHeaders } from "./cors";

export interface Parameters {
  encryptedArn: string;
}

export interface BadRequestResponse {
  statusCode: number;
  body: string;
  headers?: any;
}

export function getQueryStringParameters(
  event: APIGatewayProxyEvent
): Parameters | BadRequestResponse {
  if (!event.queryStringParameters) {
    return {
      statusCode: 400,
      body: "Please provide query string parameters",
      headers: corsHeaders,
    };
  }

  const encryptedArn = event.queryStringParameters["id"];
  if (!encryptedArn) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing query parameter 'id'" }),
      headers: corsHeaders,
    };
  }

  return {
    encryptedArn,
  };
}
