export const icon = new URL("../../img/vpc.svg", import.meta.url);

export const code = "ec2_vpc";
export const name = "AWS VPC (Virtual Private Cloud)";

export const url = (vpcId: string, region: string) =>
  `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#VpcDetails:VpcId=${vpcId}`;
