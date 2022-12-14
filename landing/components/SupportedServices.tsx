/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Service.module.css";
import * as lambda from "../../app/src/components/services/Lambda";
import * as cloudformation from "../../app/src/components/services/Cloudformation";
import * as alarm from "../../app/src/components/services/CloudwatchAlarm";
import * as logs from "../../app/src/components/services/CloudwatchLogs";
import * as eks from "../../app/src/components/services/EKS";
import * as ec2 from "../../app/src/components/services/EC2Instance";
import * as vpc from "../../app/src/components/services/VPC";
import * as rds from "../../app/src/components/services/RDS";
import * as s3 from "../../app/src/components/services/S3";
import * as ddb from "../../app/src/components/services/DynamoDB";
import * as apigw from "../../app/src/components/services/APIGateway";
import * as role from "../../app/src/components/services/IAMRole";
import * as user from "../../app/src/components/services/IAMUser";
import * as sfn from "../../app/src/components/services/SFN";
import * as sns from "../../app/src/components/services/SNS";
import * as kinesis from "../../app/src/components/services/SNS";
import * as amplify from "../../app/src/components/services/Amplify";
import * as appsync from "../../app/src/components/services/AppSync";

const services = [
  {
    resourceName: "AWS Lambda Functions",
    icon: lambda.icon,
    status: "supported",
  },
  {
    resourceName: "AWS DynamoDB Tables",
    icon: ddb.icon,
    status: "supported",
  },
  {
    resourceName: "Amazon S3 Buckets",
    icon: s3.icon,
    status: "supported",
  },
  {
    resourceName: "AWS CloudFormation Stacks",
    icon: cloudformation.icon,
    status: "supported",
  },
  {
    resourceName: "AWS IAM Users",
    icon: user.icon,
    status: "supported",
  },
  {
    resourceName: "AWS IAM Roles",
    icon: role.icon,
    status: "supported",
  },
  {
    resourceName: "AWS Cloudwatch Alarms",
    icon: alarm.icon,
    status: "supported",
  },
  {
    resourceName: "AWS Cloudwatch Logs",
    icon: logs.icon,
    status: "supported",
  },
  {
    resourceName: "Amazon EC2 Instances",
    icon: ec2.icon,
    status: "supported",
  },
  {
    resourceName: "Amazon EC2 Load Balancers",
    icon: ec2.icon,
    status: "soon",
  },
  {
    resourceName: "Amazon EC2 Auto Scaling",
    icon: ec2.icon,
    status: "soon",
  },
  {
    resourceName: "Amazon VPCs",
    icon: vpc.icon,
    status: "supported",
  },
  {
    resourceName: "Amazon VPC Subnets",
    icon: vpc.icon,
    status: "supported",
  },
  {
    resourceName: "Amazon VPC Security Groups",
    icon: vpc.icon,
    status: "supported",
  },
  {
    resourceName: "Amazon ECS Clusters",
    icon: eks.icon,
    status: "supported",
  },
  {
    resourceName: "Amazon ECS Services",
    icon: eks.icon,
    status: "supported",
  },
  {
    resourceName: "Amazon ECS Task Definitions",
    icon: eks.icon,
    status: "soon",
  },
  {
    resourceName: "Amazon EKS Clusters",
    icon: eks.icon,
    status: "soon",
  },
  {
    resourceName: "Amazon ApiGateway APIs",
    icon: apigw.icon,
    status: "soon",
  },
  {
    resourceName: "Amazon SNS Topics",
    icon: sns.icon,
    status: "supported",
  },
  {
    resourceName: "AWS RDS Clusters",
    icon: rds.icon,
    status: "soon",
  },
  {
    resourceName: "AWS DAX Clusters",
    icon: ddb.icon,
    status: "supported",
  },
  {
    resourceName: "Amazon Aurora Instances",
    icon: rds.icon,
    status: "soon",
  },
  {
    resourceName: "Amazon Cognito Pools",
    icon: logs.icon,
    status: "soon",
  },
  {
    resourceName: "AWS Step Functions",
    icon: sfn.icon,
    status: "soon",
  },
  {
    resourceName: "Amazon Kinesis",
    icon: kinesis.icon,
    status: "soon",
  },
  {
    resourceName: "AWS Amplify",
    icon: amplify.icon,
    status: "soon",
  },
  {
    resourceName: "AWS AppSync APIs",
    icon: appsync.icon,
    status: "soon",
  },
  {
    resourceName: "AWS Secrets Manager Secrets",
    icon: appsync.icon,
    status: "soon",
  },
  {
    resourceName: "Amazon Elasticsearch Clusters",
    icon: appsync.icon,
    status: "soon",
  },
];

export const SupportedServicesSection = () => {
  return (
    <div className={styles.section}>
      <h2 style={{ fontSize: "2.5em", marginBottom: 0, marginTop: "80px" }}>
        Supported Services
      </h2>
      <h3>
        CloudTempo works with following services. Focusing on a small set of
        Serverless-related services first.
      </h3>
      <div className={styles.listContainer}>
        {services.map((service) => {
          return (
            <div key={service.resourceName} className={styles.service}>
              <img
                src={service.icon.toString()}
                alt={service.resourceName}
                style={{
                  filter:
                    service.status === "soon" ? "grayscale(100%)" : "none",
                }}
              />
              <span
                className={styles.serviceName}
                style={{
                  color: service.status === "soon" ? "#999" : "white",
                }}
              >
                {service.resourceName}
              </span>
              {service.status === "soon" && (
                <span className={styles.soon}> (Soon!)</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
