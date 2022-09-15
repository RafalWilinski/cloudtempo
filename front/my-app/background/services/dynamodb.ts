import { Document } from "../../src/document";

export async function getAllDynamoDBTables(credentials: any, region: string) {
  const dynamo = new AWS.DynamoDB({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let tables: Document[] = [];

  do {
    const response: any = await dynamo
      .listTables({
        ExclusiveStartTableName: token,
      })
      .promise();

    tables = [
      ...tables,
      ...(response.TableNames ?? []).map((name: string) => ({
        name,
        arn: `arn:aws:dynamodb:${region}:${credentials.accountId}:table/${name}`,
        awsService: "dynamodb",
        region,
      })),
    ];
    token = response.NextMarker;
    firstRun = false;
  } while (token || firstRun);

  return tables;
}
