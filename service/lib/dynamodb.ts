import { Document } from "./document";
import { DynamoDBClient, paginateListTables } from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient({});

export async function indexDynamoDBTables(region: string): Promise<Document[]> {
  let documents: Document[] = [];

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
