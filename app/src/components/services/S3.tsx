export const url = (name: string, region: string, tab: string = "code") =>
  `https://s3.console.aws.amazon.com/s3/buckets/${name}?region=${region}&tab=${tab}`;

export const icon = new URL("../../img/s3.svg", import.meta.url);

export const code = "s3";
export const name = "AWS S3";
