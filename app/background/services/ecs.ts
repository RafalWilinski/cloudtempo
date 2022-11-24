import {
  ListClustersResponse,
  ListServicesResponse,
} from "aws-sdk/clients/ecs";
import { Document } from "../../src/document";

export async function getAllECSClusters(
  credentials: any,
  region: string
): Promise<Document[]> {
  const ecs = new AWS.ECS({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let documents: Document[] = [];

  do {
    const response: ListClustersResponse = await ecs
      .listClusters({
        nextToken: token,
      })
      .promise();

    documents = [
      ...documents,
      ...(response.clusterArns ?? []).map((cluster) => ({
        name: cluster.split("/").pop(),
        arn: cluster,
        description: "",
        awsService: "ecs_cluster",
        region,
      })),
    ];
    token = response.nextToken;
    firstRun = false;
  } while (token || firstRun);

  return documents;
}

export async function getAllECSServices(credentials: any, region: string) {
  const ecs = new AWS.ECS({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let documents: Document[] = [];

  do {
    const response: ListServicesResponse = await ecs
      .listServices({
        nextToken: token,
      })
      .promise();

    documents = [
      ...documents,
      ...(response.serviceArns ?? []).map((serviceArn) => ({
        name: serviceArn.split("/").pop(),
        arn: serviceArn,
        description: "",
        awsService: "ecs_service",
        region,
      })),
    ];
    token = response.nextToken;
    firstRun = false;
  } while (token || firstRun);

  return documents;
}
