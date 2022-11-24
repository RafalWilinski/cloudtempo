/// Upload object to S3 using Multipart upload method with AWS-SDK V3 for Javascript / Typescript

import { S3Client } from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'
​
const buffer = fs.readFileSync('path-to-file.jpg')
const multipartUpload = new Upload({
  client: new S3Client({}),
  params: { Bucket: bucket, Key: key, Body: buffer },
})
​
await multipartUpload.done();