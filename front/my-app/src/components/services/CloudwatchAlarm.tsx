export const url = (name: string, region: string) =>
  `https://${region}.console.aws.amazon.com/cloudwatch/home?region=${region}#alarmsV2:alarm/${encodeURIComponent(
    name
  )}?~()`;

export const icon =
  "https://d2q66yyjeovezo.cloudfront.net/icon/8f57ebd825a828e205b2dde223ba17e4-6af63a22dc297f8041286760ee8cd2c9.svg";

export const code = "alarm";
export const name = "AWS CloudWatch Alarm";
