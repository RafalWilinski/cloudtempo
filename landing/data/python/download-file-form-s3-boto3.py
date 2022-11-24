### Download a file from AWS S3 using Boto3

import boto3

# Create an S3 client
s3_client = boto3.client('s3')

# Download the file from S3
s3_client.download_file('MyBucket', 'hello-file-on-s3.txt', 'hello-local.txt')
print(open('hello-local.txt').read())

