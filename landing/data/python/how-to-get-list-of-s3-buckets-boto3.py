### How to get a list of all S3 Buckets in a region using boto3

import boto3

# Create S3 client
s3 = boto3.client(
  's3',
  # Replace with your region like us-east-1
  region_name='us-west-2'
)

# Call S3 to list current buckets
response = s3.list_buckets()

# Get a list of all bucket names from the response
buckets = [bucket['Name'] for bucket in response['Buckets']]
print(buckets)