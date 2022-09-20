export const icon =
  "https://d2q66yyjeovezo.cloudfront.net/icon/d88319dfa5d204f019b4284149886c59-7d586ea82f792b61a8c87de60565133d.svg";

export const code = "ec2";
export const name = "AWS EC2 Instance";

export const url = (instanceId: string, region: string) =>
  `https://${region}.console.aws.amazon.com/ec2/home?region=${region}#InstanceDetails:instanceId=${instanceId}`;
