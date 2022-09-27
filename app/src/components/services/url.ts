import { Document } from "../../document";
import * as lambda from "./Lambda";
import * as s3 from "./S3";
import * as dynamodb from "./DynamoDB";
import * as cloudformation from "./Cloudformation";
import * as cloudwatchLogs from "./CloudwatchLogs";
import * as cloudwatchAlarm from "./CloudwatchAlarm";
import * as iamRole from "./IAMRole";
import * as iamUser from "./IAMUser";
import * as snsTopic from "./SNS";
import * as ec2Instance from "./EC2Instance";
import * as ecsCluster from "./ECSCluster";
import * as ecsService from "./ECSService";
import * as vpc from "./VPC";
import * as sg from "./SecurityGroup";
import * as subnet from "./Subnet";

export function consoleUrl(item: Document, accountId: string): string {
  switch (item.awsService) {
    case "lambda": {
      return lambda.url(item.name!, item.region);
    }
    case "s3": {
      return s3.url(item.name!, item.region);
    }
    case "dynamodb": {
      return dynamodb.url(item.name!, item.region);
    }
    case "cloudformation": {
      return cloudformation.url(item.name!, item.region, "0", "0"); // todo
    }
    case "logs": {
      return cloudwatchLogs.url(item.name!, item.region);
    }
    case "alarm": {
      return cloudwatchAlarm.url(item.name!, item.region);
    }
    case "iam_user": {
      return iamUser.url(item.name!, item.region);
    }
    case "iam_role": {
      return iamRole.url(item.name!, item.region);
    }
    case "logs": {
      return cloudwatchLogs.url(item.name!, item.region);
    }
    case "ec2": {
      return ec2Instance.url(item.extraFields!.instanceId, item.region);
    }
    case "ecs_cluster": {
      return ecsCluster.url(item.name!, item.region);
    }
    case "ecs_service": {
      return ecsService.url(item.name!, item.region);
    }
    case "sns_topic": {
      return snsTopic.url(item.arn!, item.region);
    }
    case vpc.code: {
      return vpc.url(item.name!, item.region);
    }
    case sg.code: {
      return sg.url(item.name!, item.region);
    }
    case subnet.code: {
      return subnet.url(item.name!, item.region);
    }
    default:
      return "missing";
  }
}
