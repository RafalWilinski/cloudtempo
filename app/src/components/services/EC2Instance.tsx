export const icon = new URL("../../img/ec2.svg", import.meta.url);

export const code = "ec2";
export const name = "AWS EC2 Instance";

export const url = (instanceId: string, region: string) =>
  `https://${region}.console.aws.amazon.com/ec2/home?region=${region}#InstanceDetails:instanceId=${instanceId}`;
