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

  tab = await browser.tabs.create({
    url: "https://us-east-1.console.aws.amazon.com/dynamodbv2/home?region=us-east-1",
    active: false,
  });
}

async function getDynamoDBHomePageCSRF(): Promise<string | undefined> {
  try {
    const dynamoDBHomePage = await fetch(
      "https://us-east-1.console.aws.amazon.com/dynamodbv2/home?region=us-east-1",
      {
        headers: {
          origin: "https://us-east-1.console.aws.amazon.com",
        },
        mode: "cors",
      }
    );

    const htmlContent = await (await dynamoDBHomePage.blob()).text();

    const splitStartToken = "csrfToken&quot;:&quot;";
    const splitEndToken = "&quot;";

    console.log(htmlContent);

    const csrfToken = htmlContent
      .split(splitStartToken)[1]
      .split(splitEndToken)[0];

    return csrfToken;
  } catch (error) {
    console.warn(
      "Failed to get CSRF token from DynamoDB Console home page",
      error
    );
    return undefined;
  }
}

export async function getECSCredentials(): Promise<Credentials> {
  if (cachedECSCredentials) {
    return cachedECSCredentials;
  }

  let csrfToken = await getECSHomePageCSRF();
  let tab;
  let retriesCount = 0;

  browser.runtime.onMessageExternal.addListener(async function (request) {
    console.log("ecs onMessageExternal", request);
    if (request.type === "ecsCsrfToken") {
      csrfToken = request.csrfToken;
    }
  });

  if (!csrfToken) {
    tab = await browser.tabs.create({
      url: "https://us-east-1.console.aws.amazon.com/ecs/v2/clusters?region=us-east-1",
      active: false,
    });
  }

  while (!csrfToken) {
    retriesCount++;

    // Wait for a second
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (retriesCount === 5) {
      throw new Error("Failed to fetch CSRF token");
    }

    csrfToken = await getECSHomePageCSRF();
  }

  //// -----

  console.log({ csrfToken, type: "ecs" });

  // Fetch temporary credentials from DynamoDB Console
  const temporaryCredentials = await fetch(
    "https://us-east-1.console.aws.amazon.com/ecs/v2/tb/creds",
    {
      credentials: "same-origin",
      method: "POST",
      headers: {
        "X-CSRF-Token": csrfToken,
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

async function getECSHomePageCSRF(): Promise<string | undefined> {
  try {
    const ecsHomePage = await fetch(
      "https://us-east-1.console.aws.amazon.com/ecs/v2/clusters?region=us-east-1",
      {
        headers: {
          origin: "https://us-east-1.console.aws.amazon.com",
        },
        mode: "no-cors",
      }
    );

    console.log(ecsHomePage);

    const htmlContent = await (await ecsHomePage.blob()).text();

    console.log(htmlContent);

    const splitStartToken = "csrfToken&quot;:&quot;";
    const splitEndToken = "&quot;";

    const csrfToken = htmlContent
      .split(splitStartToken)[1]
      .split(splitEndToken)[0];

    return csrfToken;
  } catch (error) {
    console.warn("Failed to get CSRF token from ECS Console home page", error);
    return undefined;
  }
}
