export const icon = new URL("../../img/vpc.svg", import.meta.url);

export const code = "ec2_subnet";
export const name = "AWS VPC Subnet";

export const url = (subnetId: string, region: string) =>
  `https://${region}.console.aws.amazon.com/vpc/home?region=${region}#SubnetDetails:subnetId=${subnetId}`;
