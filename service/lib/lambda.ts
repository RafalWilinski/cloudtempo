import { LambdaClient, paginateListFunctions } from "@aws-sdk/client-lambda";
import { Credentials } from "@aws-sdk/types";
import { Document } from "./document";

export async function indexFunctions(
  region: string,
  credentials?: Credentials
): Promise<Document[]> {
  let documents: Document[] = [];

  const lambdaClient = new LambdaClient({ region, credentials });
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
