/// Upload an object to AWS S3 Bucket using AWS-SDK V3 for Javascript / Typescript without streams

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

async function main(filepath) {
  // or async function main(filepath: string) if using Typescript
  const s3Client = new S3Client({ region: "us-east-1" });

  const command = new PutObjectCommand({
    Bucket: "MyBucketName",
    Key: "path/inside/bucket/my-file.txt",
    Body: fs.readFileSync(filepath, "utf-8"),
  });

  const data = await s3Client.send(command);

  console.log("Success!");

  return data;
}

console.log(main("./my-file.txt"));
