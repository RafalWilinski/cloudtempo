// Example: arn:aws:sts::979825547440:assumed-role/AWSReservedSSO_Administrator_1d40d00856264b32/marcin

export type Details = {
  accountId: string;
  resource: string;
};

export function decodeArn(arn: string): Details {
  console.log("Decoding ARN", arn);
  const [arnPrefix, service, region, accountId, resource] = arn.split(":");
  if (arnPrefix !== "arn") {
    throw new Error("Invalid ARN");
  }
  return { accountId, resource };
}
