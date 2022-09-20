export const icon =
  "https://d2q66yyjeovezo.cloudfront.net/icon/dca66d38fd916317687e1390a420c3fc-bcaecc0c3e268821d570a17049e38cc4.svg";

export const code = "ecs_cluster";
export const name = "AWS ECS Cluster";

export const url = (name: string, region: string) =>
  `https://${region}.console.aws.amazon.com/ecs/v2/clusters/${name}/services?region=${region}`;
