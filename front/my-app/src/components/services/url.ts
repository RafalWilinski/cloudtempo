import { Document } from "../../document";
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

export function consoleUrl(item: Document): string {
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
    case "iam-user": {
      return iamUser.url(item.name!, item.region);
    }
    case "iam-role": {
      return iamRole.url(item.name!, item.region);
    }
    case "logs": {
      return cloudwatchLogs.url(item.name!, item.region);
    }
    case "ec2": {
      return ec2Instance.url(item.extraFields!.instanceId, item.region);
    }
    case "ecs": {
      return ecsCluster.url(item.name!, item.region);
    }
    default:
      return "missing";
  }
}
