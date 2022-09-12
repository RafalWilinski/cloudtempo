import {
  CloudWatchLogsClient,
  paginateDescribeLogGroups,
} from "@aws-sdk/client-cloudwatch-logs";
import { Document } from "./document";

const client = new CloudWatchLogsClient({});

export async function indexCloudwatchLogGroups(
  region: string
): Promise<Document[]> {
  let documents: Document[] = [];

  const paginatorConfig = {
    client: client,
    pageSize: 100,
  };
  const commandParams = {};
  const paginator = paginateDescribeLogGroups(paginatorConfig, commandParams);

  for await (const page of paginator) {
    documents = [
      ...documents,
      ...(page.logGroups ?? []).map((logGroup) => ({
        name: logGroup.logGroupName,
        arn: logGroup.arn,
        awsService: "logs",
        region,
      })),
    ];
  }

  return documents;
}
