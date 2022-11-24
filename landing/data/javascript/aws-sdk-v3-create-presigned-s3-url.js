/// Create S3 Presigned URL using AWS-SDK V3 for Javascript / Typescript

import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
​
const client = new S3Client()
const command = new GetObjectCommand({
  Bucket: 'my-bucket',
  Key: 'my-key',
})
const url = await getSignedUrl(client, command, { expiresIn: 3600 })

console.log(url);