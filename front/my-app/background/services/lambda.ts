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
    const response: any = await lambda
      .listFunctions({
        Marker: token,
      })
      .promise();

    functions = [
      ...functions,
      ...(response.Functions ?? []).map((fn: any) => ({
        name: fn.FunctionName,
        arn: fn.FunctionArn,
        description: fn.Description,
        awsService: "lambda",
        region,
      })),
    ];
    token = response.NextMarker;
    firstRun = false;
  } while (token || firstRun);

  return functions;
}
