import * as lambda from "./Lambda";
import * as s3 from "./S3";
import * as dynamodb from "./DynamoDB";
import * as cloudformation from "./Cloudformation";
import * as cloudwatchLogs from "./CloudwatchLogs";
import * as cloudwatchAlarm from "./CloudwatchAlarm";
import * as iamRole from "./IAMRole";
import * as iamUser from "./IAMUser";
import * as ec2Instance from "./EC2Instance";
import * as ecsCluster from "./ECSCluster";

export const supportedServices = [
  lambda,
  s3,
  dynamodb,
  cloudformation,
  cloudwatchAlarm,
  cloudwatchLogs,
  iamRole,
  iamUser,
  ec2Instance,
  ecsCluster,
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
  ecs_cluster: ecsCluster.icon,
  ec2: ec2Instance.icon,
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
  ecs_cluster: "ECS Cluster",
  ec2: "EC2 Instance",
};
