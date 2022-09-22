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
import * as ecsService from "./ECSService";
import * as ecsTask from "./ECSTask";
import * as vpc from "./VPC";
import * as subnet from "./Subnet";
import * as securityGroup from "./SecurityGroup";
import * as snsTopic from "./SNS";

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
  ecsService,
  subnet,
  vpc,
  securityGroup,
  snsTopic,
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
  ecs_service: ecsService.icon,
  ecs_task: ecsTask.icon,
  ec2: ec2Instance.icon,
  ec2_sg: securityGroup.icon,
  ec2_vpc: vpc.icon,
  subnet: subnet.icon,
  sns_topic: snsTopic.icon,
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
  ecs_service: "ECS Service",
  ecs_task: "ECS Task",
  ec2: "EC2 Instance",
  ec2_vpc: "VPC",
  ec2_subnet: "VPC Subnet",
  ec2_security_group: "VPC Security Group",
  sns_topic: "SNS Topic",
  rds: "RDS Cluster",
  appsync: "AppSync API",
  sqs: "SQS Queue",
  kinesis: "Kinesis Stream",
  ssm: "SSM Parameter",
  secretsmanager: "Secrets Manager Secret",
  cloudfront: "CloudFront Distribution",
  apiGateway: "API Gateway",
  elb: "Elastic Load Balancer",
};
