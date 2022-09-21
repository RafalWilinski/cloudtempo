export const url = (name: string, region: string) =>
  `https://${region}.console.aws.amazon.com/iam/home#/roles/details/${name}?section=permissions`;

export const icon = new URL("../../img/iam.svg", import.meta.url);

export const code = "iam-role";
export const name = "IAM Role";
