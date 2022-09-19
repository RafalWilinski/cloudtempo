/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Service.module.css";
import * as lambda from "../../front/my-app/src/components/services/Lambda";
import * as cloudformation from "../../front/my-app/src/components/services/Cloudformation";
import * as alarm from "../../front/my-app/src/components/services/CloudwatchAlarm";
import * as logs from "../../front/my-app/src/components/services/CloudwatchLogs";
import * as eks from "../../front/my-app/src/components/services/EKS";
import * as ec2 from "../../front/my-app/src/components/services/EC2";
import * as vpc from "../../front/my-app/src/components/services/VPC";
import * as rds from "../../front/my-app/src/components/services/RDS";
import * as s3 from "../../front/my-app/src/components/services/S3";
import * as ddb from "../../front/my-app/src/components/services/DynamoDB";
import * as apigw from "../../front/my-app/src/components/services/APIGateway";
import * as role from "../../front/my-app/src/components/services/IAMRole";
import * as user from "../../front/my-app/src/components/services/IAMUser";

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
    status: "soon",
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
    status: "soon",
  },
  {
    resourceName: "Amazon VPC Subnets",
    icon: vpc.icon,
    status: "soon",
  },
  {
    resourceName: "Amazon VPC Security Groups",
    icon: vpc.icon,
    status: "soon",
  },
  {
    resourceName: "AWS ECS Clusters",
    icon: eks.icon,
    status: "soon",
  },
  {
    resourceName: "AWS ECS Services",
    icon: eks.icon,
    status: "soon",
  },
  {
    resourceName: "AWS EKS Clusters",
    icon: eks.icon,
    status: "soon",
  },
  {
    resourceName: "AWS ApiGateway APIs",
    icon: apigw.icon,
    status: "soon",
  },
  {
    resourceName: "AWS RDS Clusters",
    icon: rds.icon,
    status: "soon",
  },
  {
    resourceName: "AWS Aurora Instances",
    icon: rds.icon,
    status: "soon",
  },
  {
    resourceName: "AWS Cognito Pools",
    icon: logs.icon,
    status: "soon",
  },
  {
    resourceName: "AWS Step Functions",
    icon: lambda.icon,
    status: "soon",
  },
];

export const SupportedServicesSection = () => {
  return (
    <div className={styles.section}>
      <h2>Supported Services</h2>
      <h3>
        CloudTempo works with following services. Focusing on a small set of
        Serverless-related services first.
      </h3>
      <div className={styles.listContainer}>
        {services.map((service) => {
          return (
            <div key={service.resourceName} className={styles.service}>
              <img
                src={service.icon}
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
