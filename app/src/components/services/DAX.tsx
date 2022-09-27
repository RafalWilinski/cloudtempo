export const url = (name: string, region: string) =>
  `https://${region}.console.aws.amazon.com/${region}/home?region=${region}#dax-clusters?name=${name}`;

export const icon = new URL("../../img/dynamodb.svg", import.meta.url);

export const code = "dax_cluster";

export const name = "AWS DAX Cluster";
