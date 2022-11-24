### Upload a file to AWS S3 using Boto3

import boto3

s3_client = boto3.client('s3')

# Create some file with some contents in it
open('file.txt').write('Hello, world!')

# Upload the file to S3
s3_client.upload_file('file.txt', 'MyS3Bucket', 'file-on-s3.txt')
