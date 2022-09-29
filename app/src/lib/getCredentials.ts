export interface Credentials {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken: string;
  expiration: string;
  accountId?: string;
}

let cachedDynamoDBCredentials: Credentials | undefined;
let cachedECSCredentials: Credentials | undefined;

export async function getDynamoDBCredentials(): Promise<Credentials> {
  if (cachedDynamoDBCredentials) {
    const areCachedCredentialsValid =
      new Date(cachedDynamoDBCredentials.expiration) > new Date();

    if (areCachedCredentialsValid) {
      return cachedDynamoDBCredentials;
    }

    console.log("Cached credentials expired. Fetching new.");
  }

  let csrfToken: string | undefined;
  let tab: any;

  browser.runtime.onMessageExternal.addListener(async function (request: any) {
    console.log("ddb onMessageExternal", request);
    if (request.type === "ddbCsrfToken") {
      csrfToken = request.csrfToken;

      // Fetch temporary credentials from DynamoDB Console
      const temporaryCredentials = await fetch(
        "https://us-east-1.console.aws.amazon.com/dynamodbv2/tb/creds",
        {
          credentials: "same-origin",
          method: "POST",
          mode: "no-cors",
          headers: {
            "X-CSRF-Token": csrfToken!,
          },
        }
      );

      const temporaryCredentialsJson = await temporaryCredentials.json();

      if (tab) {
        await browser.tabs.remove(tab.id!);
      }

      cachedDynamoDBCredentials = temporaryCredentialsJson;

      return temporaryCredentialsJson;
    }
  });

  setTimeout(() => {
    throw new Error("Failed to get DDB credentials within 10 seconds");
  }, 10000);

  tab = await browser.tabs.create({
    url: "https://us-east-1.console.aws.amazon.com/dynamodbv2/home?region=us-east-1",
    active: false,
  });
}

export async function getECSCredentials(): Promise<Credentials> {
  if (cachedECSCredentials) {
    return cachedECSCredentials;
  }

  let csrfToken: string | undefined;
  let tab: any;

  browser.runtime.onMessageExternal.addListener(async function (request: any) {
    console.log("ecs onMessageExternal", request);
    if (request.type === "ecsCsrfToken") {
      csrfToken = request.csrfToken;

      // Fetch temporary credentials from DynamoDB Console
      const temporaryCredentials = await fetch(
        "https://us-east-1.console.aws.amazon.com/ecs/v2/tb/creds",
        {
          credentials: "same-origin",
          method: "POST",
          mode: "no-cors",
          headers: {
            "X-CSRF-Token": csrfToken!,
          },
        }
      );

      const temporaryCredentialsJson = await temporaryCredentials.json();

      if (tab) {
        await browser.tabs.remove(tab.id!);
      }

      cachedECSCredentials = temporaryCredentialsJson;

      return temporaryCredentialsJson;
    }
  });

  setTimeout(() => {
    throw new Error("Failed to get ECS credentials within 10 seconds");
  }, 10000);

  tab = await browser.tabs.create({
    url: "https://console.aws.amazon.com/ecs/v2/home?region=us-east-1",
    active: false,
  });
}
