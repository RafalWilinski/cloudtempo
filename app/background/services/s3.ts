import { ListBucketsOutput } from "aws-sdk/clients/s3";
import { Document } from "../../src/document";
import pLimit from "p-limit";

const limit = pLimit(10);

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

  const response: ListBucketsOutput = await s3.listBuckets().promise();

  return await Promise.all(
    (response.Buckets ?? []).map(async (bucket) => ({
      name: bucket.Name,
      awsService: "s3",
      arn: `arn:aws:s3:::${bucket.Name}`,
      tags: await limit(() => describeBucketTags(s3, bucket.Name!)),
      region,
    }))
  );
}

async function describeBucketTags(s3: AWS.S3, bucketName: string) {
  try {
    const tagsResponse = await s3
      .getBucketTagging({
        Bucket: bucketName,
      })
      .promise();

    return tagsResponse.TagSet;
  } catch (_error) {
    return [];
  }
}
