export const url = (name: string, region: string, tab: string = "code") =>
  `https://s3.console.aws.amazon.com/s3/buckets/${name}?region=${region}&tab=${tab}`;

export const icon =
  "https://d2q66yyjeovezo.cloudfront.net/icon/c0828e0381730befd1f7a025057c74fb-43acc0496e64afba82dbc9ab774dc622.svg";
