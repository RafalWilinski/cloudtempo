### Deleting an S3 bucket using boto3

import boto3

# Call S3 to delete the bucket
boto3.client('s3').delete_bucket(Bucket='my-bucket-name')
