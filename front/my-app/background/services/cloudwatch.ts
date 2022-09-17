import { Document } from "../../src/document";

export async function getAllCloudwatchLogGroups(
  credentials: any,
  region: string
) {
  const cwl = new AWS.CloudWatchLogs({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let documents: Document[] = [];

  do {
    const response: AWS.CloudWatchLogs.DescribeLogGroupsResponse = await cwl
      .describeLogGroups({
        nextToken: token,
      })
      .promise();

    documents = [
      ...documents,
      ...(response.logGroups ?? []).map((logGroup) => ({
        name: logGroup.logGroupName,
        arn: logGroup.arn,
        awsService: "logs",
        region,
      })),
    ];
    token = response.nextToken;
    firstRun = false;
  } while (token || firstRun);

  return documents;
}

export async function getAllCloudwatchAlarms(credentials: any, region: string) {
  const cwl = new AWS.CloudWatch({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let documents: Document[] = [];

  do {
    const response: AWS.CloudWatch.DescribeAlarmsOutput = await cwl
      .describeAlarms({
        NextToken: token,
      })
      .promise();

    documents = [
      ...documents,
      ...(response.MetricAlarms ?? []).map((alarm) => ({
        name: alarm.AlarmName,
        arn: alarm.AlarmArn,
        awsService: "alarm",
        region,
      })),
    ];
    token = response.NextToken;
    firstRun = false;
  } while (token || firstRun);

  return documents;
}
