export const url = (name: string, region: string) =>
  `https://${region}.console.aws.amazon.com/cloudwatch/home?region=${region}#logsV2:log-groups/log-group/${encodeURIComponent(
    name
  )}`;

export const icon = new URL("../../img/cloudwatch.svg", import.meta.url);

export const code = "logs";
export const name = "AWS CloudWatch Logs";
