### How to list all objects in a S3 bucket using boto3

import boto3

# Create an S3 client
s3 = boto3.client('s3')

# Call S3 to list all objects within a bucket
response = s3.list_objects_v2(Bucket='my-bucket-name')

# Print the response
print(response)


# Alternatively
s3 = boto3.resource('s3')
my_bucket = s3.Bucket('bucket_name')

for file in my_bucket.objects.all():
    print(file.key)