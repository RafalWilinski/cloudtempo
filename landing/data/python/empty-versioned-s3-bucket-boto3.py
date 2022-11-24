### Deleting all objects from versioned S3 bucket using boto3

import boto3

s3 = boto3.resource('s3')
s3_bucket = s3.Bucket(bucket_name)

bucket_versioning = s3.BucketVersioning(bucket_name)

if bucket_versioning.status == 'Enabled':
    s3_bucket.object_versions.delete()
else:
    s3_bucket.objects.all().delete()