async function getTemporaryCredentials() {
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

  console.log(`CSRF token: ${csrfToken}`);

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

  return temporaryCredentialsJson;
}

async function loadRemoteAwsSdk() {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://www.unpkg.com/browse/aws-sdk@2.1216.0/dist/aws-sdk.js";
  document.head.appendChild(script);
  eval(script);
}

getTemporaryCredentials()
  .then(async (creds) => {
    await loadRemoteAwsSdk();
    const lambda = new AWS.Lambda({
      region: "us-east-1",
      credentials: creds,
    });

    lambda.listFunctions({}).promise().then(console.log).catch(console.error);
  })
  .catch(console.log);
