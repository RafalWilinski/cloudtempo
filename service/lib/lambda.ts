import { LambdaClient, paginateListFunctions } from "@aws-sdk/client-lambda";
import { Document } from "./document";

export async function indexFunctions(region: string): Promise<Document[]> {
  let documents: Document[] = [];

  const lambdaClient = new LambdaClient({ region });
  const paginatorConfig = {
    client: lambdaClient,
    pageSize: 100,
  };
  const commandParams = {};
  const paginator = paginateListFunctions(paginatorConfig, commandParams);

  for await (const page of paginator) {
    documents = [
      ...documents,
      ...(page.Functions ?? []).map((fn) => ({
        name: fn.FunctionName,
        arn: fn.FunctionArn,
        description: fn.Description,
        awsService: "lambda",
        region,
      })),
    ];
  }

  return documents;
}
