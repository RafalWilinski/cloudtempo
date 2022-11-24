import { ListFunctionsResponse } from "aws-sdk/clients/lambda";
import { Document } from "../../src/document";

export async function getAllLambdaFunctions(
  credentials: any,
  region: string
): Promise<Document[]> {
  const lambda = new AWS.Lambda({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let functions: Document[] = [];

  do {
    const response: ListFunctionsResponse = await lambda
      .listFunctions({
        Marker: token,
      })
      .promise();

    functions = [
      ...functions,
      ...(response.Functions ?? []).map((fn) => ({
        name: fn.FunctionName,
        arn: fn.FunctionArn!,
        description: fn.Description,
        subtext: `${fn.Runtime} / ${fn.MemorySize}MB / ${fn.Timeout}s`,
        awsService: "lambda",
        region,
      })),
    ];
    token = response.NextMarker;
    firstRun = false;
  } while (token || firstRun);

  return functions;
}
