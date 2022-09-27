import { DescribeClustersRequest } from "aws-sdk/clients/dax";
import { Document } from "../../src/document";
export async function getAllDAXClusters(
  credentials: any,
  region: string
): Promise<Document[]> {
  const dax = new AWS.DAX({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let documents: Document[] = [];
  do {
    const response: DescribeClustersRequest = await dax
      .describeClusters({
        NextToken: token,
      })
      .promise();
    documents = [
      ...documents,
      ...(response.ClusterNames ?? []).map((clusterName) => ({
        name: clusterName,
        arn: `arn:aws:dax:${region}:${credentials.accountId}:cache/${clusterName}`,
        description: "",
        awsService: "dax_cluster",
        region,
      })),
    ];
    token = response.NextToken;
    firstRun = false;
  } while (token || firstRun);
  return documents;
}
