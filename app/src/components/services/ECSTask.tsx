export const icon = new URL("../../img/ecs.svg", import.meta.url);

export const code = "ecs_task";
export const name = "AWS ECS Task Definition";

export const url = (name: string, region: string) =>
  `https://${region}.console.aws.amazon.com/ecs/v2/task-definitions/${name}?region=${region}`;
