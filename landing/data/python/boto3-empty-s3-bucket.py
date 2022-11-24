### Emptying an S3 bucket using boto3

import boto3    

s3 = boto3.resource('s3')
bucket = s3.Bucket('my-happy-bucket')

bucket.objects.all().delete()
