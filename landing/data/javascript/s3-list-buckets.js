/// List all S3 buckets in Javascript using AWS SDK V2

// Load the AWS SDK for Node.js
const { S3 } = require("aws-sdk");
// or import { S3 } from "aws-sdk"; is using ESM
const s3 = new S3({ region: "us-east-1" });

async function main() {
  const buckets = await s3.listBuckets().promise();

  console.log("Buckets:", buckets.Buckets);
}

main();

// Or if the number of buckets is bigger and you need pagination
async function getBucketsWithPagination() {
  let buckets = [];
  let continuationToken = null;
  do {
    const params = {
      ContinuationToken: continuationToken,
    };
    const data = await s3.listBuckets(params).promise();
    buckets = buckets.concat(data.Buckets);
    continuationToken = data.NextContinuationToken;
  } while (continuationToken);

  console.log("Buckets:", buckets);
}

getBucketsWithPagination();
