import {
  S3Client,
  ListBucketsCommand,
  ListBucketsCommandOutput,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { Document } from "./document";

const s3Client = new S3Client({});

export async function indexBuckets(region: string): Promise<Document[]> {
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
}

export async function putObject(key: string, body: any): Promise<void> {
  await s3Client.send(
    new PutObjectCommand({
      Bucket: process.env.DUMP_BUCKET!,
      Key: key,
      Body: JSON.stringify(body),
    })
  );
}
