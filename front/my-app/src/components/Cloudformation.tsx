export const url = (
  name: string,
  region: string,
  accountId: string,
  stackId: string
) =>
  `https://${region}.console.aws.amazon.com/cloudformation/home?region=${region}#/stacks/stackinfo?filteringStatus=active&filteringText=&viewNested=true&hideStacks=false&stackId=arn%3Aaws%3Acloudformation%3A${region}%3A${accountId}%3Astack%2F${name}%2F${stackId}`;

export const icon =
  "https://d2q66yyjeovezo.cloudfront.net/icon/5d3629a64564e611bbeae9b3045be424-e9ebf1d2d9d9c14a684cec1c80e127eb.svg";
