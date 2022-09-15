import { Document } from "../../src/document";

export async function getAllS3Buckets(
  credentials: any,
  region: string
): Promise<Document[]> {
  if (region !== "us-east-1") {
    return [];
  }

  const s3 = new AWS.S3({
    credentials,
    region,
  });

  const response = await s3.listBuckets().promise();

  return (response.Buckets ?? []).map((bucket: any) => ({
    name: bucket.Name,
    awsService: "s3",
    arn: `arn:aws:s3:::${bucket.Name}`,
    region,
  }));
}
