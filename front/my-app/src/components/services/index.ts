import * as lambda from "./Lambda";
import * as s3 from "./S3";
import * as dynamodb from "./DynamoDB";
import * as cloudformation from "./Cloudformation";
import * as cloudwatchLogs from "./CloudwatchLogs";
import * as cloudwatchAlarm from "./CloudwatchAlarm";
import * as iamRole from "./IAMRole";
import * as iamUser from "./IAMUser";

export const supportedServices = [
  lambda,
  s3,
  dynamodb,
  cloudformation,
  cloudwatchAlarm,
  cloudwatchLogs,
  iamRole,
  iamUser,
];

export const serviceIconMap: Record<string, any> = {
  lambda: lambda.icon,
  s3: s3.icon,
  dynamodb: dynamodb.icon,
  cloudformation: cloudformation.icon,
  logs: cloudwatchLogs.icon,
  alarm: cloudwatchAlarm.icon,
  iam_user: iamUser.icon,
  iam_role: iamRole.icon,
};

export const serviceResourceNameMap: Record<string, string> = {
  lambda: "Lambda Function",
  s3: "S3 Bucket",
  dynamodb: "DynamoDB Table",
  cloudformation: "CloudFormation Stack",
  logs: "CloudWatch Log Group",
  alarm: "CloudWatch Alarm",
  iam_user: "IAM User",
  iam_role: "IAM Role",
};
