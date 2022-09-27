// This does not work cross region unfortunately.
const resp = fetch(
  "https://eu-central-1.console.aws.amazon.com/lambda/services/ajax?operation=listFunctions&locale=en",
  {
    method: "post",
    body: JSON.stringify({
      service: "lambda.AWSLambda",
      api: "listFunctions",
      payload: {},
      operation: "proxyAwsCall",
    }),
    credentials: "include",
    headers: {
      "content-type": "application/json",
      accept: "application/json, text/plain, */*",
      "x-csrf-token":
        "1842ad84328a9232f9ef0cbd08a604ba836af0ccb3973563f3d9e8ea0a9a3345",
    },
  }
);

resp
  .then((r) => r.json())
  .then(console.log)
  .catch(console.error);
