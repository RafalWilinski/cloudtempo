export const url = (name: string, region: string) =>
  `https://${region}.console.aws.amazon.com/iam/home#/users/${name}`;

export const icon = new URL("../../img/iam.svg", import.meta.url);

export const code = "iam-user";
export const name = "IAM User";
