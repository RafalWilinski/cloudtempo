import {
  S3Client,
  ListBucketsCommand,
  ListBucketsCommandOutput,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { Credentials } from "@aws-sdk/types";
import { Document } from "./document";

export async function indexBuckets(
  region: string,
  credentials?: Credentials
): Promise<Document[]> {
  if (region !== "us-east-1") {
    return [];
  }

  try {
    const s3Client = new S3Client({ region, credentials });
    let firstRun = true;
    let listBucketsResult: ListBucketsCommandOutput;
    let paginationToken;
    let documents: Document[] = [];

    do {
      firstRun = false;
      listBucketsResult = await s3Client.send(
        new ListBucketsCommand({
          ContinuationToken: paginationToken,
        })
      );

      documents = [
        ...documents,
        ...(listBucketsResult.Buckets ?? []).map((bucket) => ({
          name: bucket.Name,
          awsService: "s3",
          region,
        })),
      ];

      // todo
      paginationToken = undefined;
    } while (firstRun || paginationToken);

    return documents;
  } catch (error) {
    console.error("Failed to index buckets", error);
    return [];
  }
}

export async function putObject(
  key: string,
  body: any,
  credentials?: Credentials
): Promise<void> {
  const mainS3Client = new S3Client({ credentials, region: "us-east-1" });

  await mainS3Client.send(
    new PutObjectCommand({
      Bucket: process.env.DUMP_BUCKET!,
      Key: key,
      Body: JSON.stringify(body),
    })
  );
}
