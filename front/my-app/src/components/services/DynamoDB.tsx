export const url = (name: string, region: string) =>
  `https://${region}.console.aws.amazon.com/dynamodbv2/home?region=${region}#table?initialTagKey=&name=${name}&tab=overview`;

export const icon = new URL("../../img/dynamodb.svg", import.meta.url);

export const code = "dynamodb";

export const name = "AWS DynamoDB";
