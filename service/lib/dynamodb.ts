import { Document } from "./document";
import { Credentials } from "@aws-sdk/types";
import { DynamoDBClient, paginateListTables } from "@aws-sdk/client-dynamodb";

export async function indexDynamoDBTables(
  region: string,
  credentials?: Credentials
): Promise<Document[]> {
  let documents: Document[] = [];

  const ddbClient = new DynamoDBClient({ region, credentials });
  const paginatorConfig = {
    client: ddbClient,
    pageSize: 100,
  };
  const commandParams = {};
  const paginator = paginateListTables(paginatorConfig, commandParams);

  for await (const page of paginator) {
    documents = [
      ...documents,
      ...(page.TableNames ?? []).map((name) => ({
        name,
        awsService: "dynamodb",
        region,
      })),
    ];
  }

  return documents;
}
