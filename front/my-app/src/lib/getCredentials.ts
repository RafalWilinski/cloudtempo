export interface Credentials {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken: string;
  expiration: string;
}

let cachedDynamoDBCredentials: Credentials | undefined;
let cachedECSCredentials: Credentials | undefined;

export async function getDynamoDBCredentials(): Promise<Credentials> {
  // todo - check if they're not expired first AND valid
  if (cachedDynamoDBCredentials) {
    return cachedDynamoDBCredentials;
  }

  // todo: do not reauth if not needed!
  const tab = await chrome.tabs.create({
    url: "https://us-east-1.console.aws.amazon.com/dynamodbv2/home?region=us-east-1",
    active: false,
  });

  // Wait for 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Todo - replace with something smarter
  // let isLoaded = false;
  // while (!isLoaded) {
  //   isLoaded = tab.status === "complete";
  // }

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

  await chrome.tabs.remove(tab.id!);

  cachedDynamoDBCredentials = temporaryCredentialsJson;

  return temporaryCredentialsJson;
}

export async function getECSCredentials(): Promise<Credentials> {
  if (cachedECSCredentials) {
    return cachedECSCredentials;
  }

  /// ---------- Get CSRF token from AWS DynamoDB Console home -------------
  const tab = await chrome.tabs.create({
    url: "https://us-east-1.console.aws.amazon.com/ecs/v2/clusters?region=us-east-1",
    active: false,
  });

  // Wait for 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Todo - replace with something smarter
  // let isLoaded = false;
  // while (!isLoaded) {
  //   isLoaded = tab.status === "complete";
  // }

  console.log("ECS Console loaded");

  const ecsHomePage = await fetch(
    "https://us-east-1.console.aws.amazon.com/ecs/v2/clusters?region=us-east-1"
  );

  const ecsHomePageContent = await (await ecsHomePage.blob()).text();

  const splitStartToken = "csrfToken&quot;:&quot;";
  const splitEndToken = "&quot;";

  const csrfToken = ecsHomePageContent
    .split(splitStartToken)[1]
    .split(splitEndToken)[0];

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

  await chrome.tabs.remove(tab.id!);

  cachedECSCredentials = temporaryCredentialsJson;

  return temporaryCredentialsJson;
}
