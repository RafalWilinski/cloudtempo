/// Assume AWS IAM role using AWS SDK v3

import { AssumeRoleCommand, STSClient } from "@aws-sdk/client-sts";

async function getCredentials() {
  const stsClient = new STSClient({ region: "us-east-1" });

  const command = new AssumeRoleCommand({
    RoleArn: "arn:aws:iam::123456789012:role/MyRole", // replace with your ARN of role to assume
    RoleSessionName: "MySession", // replace with your session name
    DurationSeconds: 3600, // optional
  });

  const data = await stsClient.send(command);

  console.log("Success!", { assumedCredentials: data.Credentials });

  return data;
}

// Usage of assumed credentials
import { S3Client } from "@aws-sdk/client-s3";

async function main() {
  const assumedCredentials = await getCredentials();
  const s3 = new S3Client({
    region: "us-east-1",
    credentials: {
      accessKeyId: assumedCredentials.Credentials.AccessKeyId,
      secretAccessKey: assumedCredentials.Credentials.SecretAccessKey,
      sessionToken: assumedCredentials.Credentials.SessionToken,
    },
  });

  const command = new PutObjectCommand({
    Bucket: "MyBucketName",
    Key: "path/inside/bucket/my-file.txt",
    Body: fs.readFileSync("./my-file.txt", "utf-8"),
  });

  const data = await s3.send(command);
  console.log("File uploaded to S3 using assumed credentials!");
}

main();
