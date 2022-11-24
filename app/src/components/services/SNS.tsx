export const icon = new URL("../../img/sns.svg", import.meta.url);

export const code = "sns";
export const name = "AWS Simple Notifications Service";

export const url = (arn: string, region: string) =>
  `https://${region}.console.aws.amazon.com/sns/v3/home?region=${region}#/topic/${arn}`;
