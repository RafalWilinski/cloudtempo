import { get, set } from "js-cookie";
import { getCurrentAccountId } from "./getCurrentAccountId";

export interface Credentials {
  accessKeyId: string;
  secretAccessKey: string;
}

let cachedTemporaryCredentials: Credentials | undefined;

export async function getTemporarySessionCredentials(): Promise<Credentials> {
  if (cachedTemporaryCredentials) {
    return cachedTemporaryCredentials;
  }
  // Get CSRF token from AWS DynamoDB Console home
  const dynamoDBHomePage = await fetch(
    "https://us-east-1.console.aws.amazon.com/dynamodbv2/home?region=us-east-1"
  );

  const htmlContent = await (await dynamoDBHomePage.blob()).text();

  const splitStartToken = "csrfToken&quot;:&quot;";
  const splitEndToken = "&quot;";

  const csrfToken = htmlContent
    .split(splitStartToken)[1]
    .split(splitEndToken)[0];

  // Fetch temporary credentials from DynamoDB Console
  const temporaryCredentials = await fetch(
    "https://us-east-1.console.aws.amazon.com/dynamodbv2/tb/creds",
    {
      credentials: "same-origin",
      method: "POST",
      headers: {
        "X-CSRF-Token": csrfToken,
      },
    }
  );

  const temporaryCredentialsJson = await temporaryCredentials.json();

  console.log("New temporary credentials", temporaryCredentialsJson);
  cachedTemporaryCredentials = temporaryCredentialsJson;

  return temporaryCredentialsJson;
}

export function getCredentials(accountId: string): Credentials | undefined {
  const credentials = get(`aws-account-${accountId}`);
  if (credentials) {
    return JSON.parse(credentials) as Credentials;
  }
}

export function getCurrentAccountCredentials(): Credentials | undefined {
  const currentAccountId = getCurrentAccountId();

  if (currentAccountId) {
    const credentials = getCredentials(currentAccountId);
    return credentials;
  }
}

export function saveCurrentAccountCredentials(credentials: Credentials): void {
  const currentAccountId = getCurrentAccountId();

  if (currentAccountId) {
    set(`aws-account-${currentAccountId}`, JSON.stringify(credentials));
  }
}
