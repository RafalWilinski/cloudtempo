import { Document } from "../../src/document";

export async function getAllCloudformationStacks(
  credentials: any,
  region: string
) {
  const cfn = new AWS.CloudFormation({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let stacks: Document[] = [];

  do {
    const response: AWS.CloudFormation.DescribeStacksOutput = await cfn
      .describeStacks({
        NextToken: token,
      })
      .promise();

    stacks = [
      ...stacks,
      ...(response.Stacks ?? []).map((stack) => ({
        name: stack.StackName,
        arn: stack.StackId!,
        awsService: "cloudformation",
        description: stack.Description,
        tags: stack.Tags,
        region,
      })),
    ];
    token = response.NextToken;
    firstRun = false;
  } while (token || firstRun);

  return stacks;
}
