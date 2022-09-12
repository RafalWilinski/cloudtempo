import {
  CloudFormationClient,
  paginateListStacks,
} from "@aws-sdk/client-cloudformation";
import { Document } from "./document";

export async function indexCloudformationStacks(
  region: string
): Promise<Document[]> {
  let documents: Document[] = [];

  const cloudFormationClient = new CloudFormationClient({ region });
  const paginatorConfig = {
    client: cloudFormationClient,
    pageSize: 100,
  };
  const commandParams = {};
  const paginator = paginateListStacks(paginatorConfig, commandParams);

  for await (const page of paginator) {
    documents = [
      ...documents,
      ...(page.StackSummaries ?? []).map((stack) => ({
        name: stack.StackName,
        awsService: "cloudformation",
        region,
      })),
    ];
  }

  return documents;
}
