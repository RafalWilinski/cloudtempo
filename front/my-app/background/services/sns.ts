import { ListTopicsResponse } from "aws-sdk/clients/sns";
import { Document } from "../../src/document";

export async function getAllSNSTopics(
  credentials: any,
  region: string
): Promise<Document[]> {
  const sns = new AWS.SNS({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let documents: Document[] = [];

  do {
    const response: ListTopicsResponse = await sns
      .listTopics({
        NextToken: token,
      })
      .promise();

    documents = [
      ...documents,
      ...(response.Topics ?? []).map((topic) => ({
        name: topic.TopicArn?.split("/").pop() ?? "Malformed SNS Topic ARN",
        arn: topic.TopicArn!,
        description: "",
        awsService: "sns_topic",
        region,
      })),
    ];
    token = response.NextToken;
    firstRun = false;
  } while (token || firstRun);

  return documents;
}
