export const url = (name: string, region: string) =>
  `https://${region}.console.aws.amazon.com/cloudwatch/home?region=${region}#alarmsV2:alarm/${encodeURIComponent(
    name
  )}?~()`;

export const icon = new URL("../../img/cloudwatch.svg", import.meta.url);

export const code = "alarm";
export const name = "AWS CloudWatch Alarm";
