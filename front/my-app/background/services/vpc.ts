import {
  DescribeVpcsResult,
  DescribeSubnetsResult,
  DescribeSecurityGroupsResult,
} from "aws-sdk/clients/ec2";
import { Document } from "../../src/document";

export async function getAllVPCs(
  credentials: any,
  region: string
): Promise<Document[]> {
  const ec2 = new AWS.EC2({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let documents: Document[] = [];

  do {
    const response: DescribeVpcsResult = await ec2
      .describeVpcs({
        NextToken: token,
      })
      .promise();

    documents = [
      ...documents,
      ...(response.Vpcs ?? []).map((vpc) => ({
        name: vpc.VpcId,
        arn: `arn:aws:ec2:${region}:${credentials.accountId}:vpc/${vpc.VpcId}`,
        description: vpc.CidrBlock ?? "CIDR block missing",
        awsService: "ec2_vpc",
        extraFields: {
          cirdBlock: vpc.CidrBlock ?? "",
        },
        region,
      })),
    ];
    token = response.NextToken;
    firstRun = false;
  } while (token || firstRun);

  return documents;
}

export async function getAllSubnets(
  credentials: any,
  region: string
): Promise<Document[]> {
  const ec2 = new AWS.EC2({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let documents: Document[] = [];

  do {
    const response: DescribeSubnetsResult = await ec2
      .describeSubnets({
        NextToken: token,
      })
      .promise();

    documents = [
      ...documents,
      ...(response.Subnets ?? []).map((subnet) => ({
        name: subnet.SubnetId,
        arn: `arn:aws:ec2:${region}:${credentials.accountId}:subnet/${subnet.SubnetId}`,
        description: subnet.CidrBlock ?? "CIDR block missing",
        awsService: "ec2_subnet",
        extraFields: {
          cirdBlock: subnet.CidrBlock ?? "",
        },
        region,
      })),
    ];
    token = response.NextToken;
    firstRun = false;
  } while (token || firstRun);

  return documents;
}

export async function getAllSecurityGroups(
  credentials: any,
  region: string
): Promise<Document[]> {
  const ec2 = new AWS.EC2({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let documents: Document[] = [];

  do {
    const response: DescribeSecurityGroupsResult = await ec2
      .describeSecurityGroups({
        NextToken: token,
      })
      .promise();

    documents = [
      ...documents,
      ...(response.SecurityGroups ?? []).map((securityGroup) => ({
        name: securityGroup.GroupId,
        arn: `arn:aws:ec2:${region}:${credentials.accountId}:security-group/${securityGroup.GroupId}`,
        description: securityGroup.Description ?? "Description missing",
        awsService: "ec2_sg",
        extraFields: {
          description: securityGroup.Description ?? "",
        },
        region,
      })),
    ];
    token = response.NextToken;
    firstRun = false;
  } while (token || firstRun);

  return documents;
}
