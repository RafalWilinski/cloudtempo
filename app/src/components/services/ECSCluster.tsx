export const icon = new URL("../../img/ecs.svg", import.meta.url);

export const code = "ecs_cluster";
export const name = "AWS ECS Cluster";

export const url = (name: string, region: string) =>
  `https://${region}.console.aws.amazon.com/ecs/v2/clusters/${name}/services?region=${region}`;
