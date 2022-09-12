import {
  CloudFormationClient,
  paginateListStacks,
} from "@aws-sdk/client-cloudformation";
import { Document } from "./document";

const cloudFormationClient = new CloudFormationClient({});

export async function indexCloudformationStacks(
  region: string
): Promise<Document[]> {
  let documents: Document[] = [];

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
