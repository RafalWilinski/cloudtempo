export const icon = new URL("../../img/vpc.svg", import.meta.url);

export const code = "ec2_sg";
export const name = "AWS VPC Security Group";

export const url = (groupId: string, region: string) =>
  `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#SecurityGroup:groupId=${groupId}`;
