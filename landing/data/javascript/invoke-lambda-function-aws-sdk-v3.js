/// How to invoke Lambda function using AWS-SDK V3 for Javascript / Typescript

import { InvokeCommand, LambdaClient, LogType } from "@aws-sdk/client-lambda";

async function main() {
  const client = new LambdaClient({ region: "us-east-1" });
  const command = new InvokeCommand({
    FunctionName: "my-function-name",
    Payload: JSON.stringify({ key: "value" }),
    LogType: LogType.Tail, // Tail | None
  });

  const { Payload, LogResult } = await client.send(command);

  // Decode invocation result
  const result = Buffer.from(Payload).toString();

  // Decode the log result
  const logs = Buffer.from(LogResult, "base64").toString();

  return { logs, result };
}

console.log(main());
