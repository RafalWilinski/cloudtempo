### How to delete an AWS S3 bucket that is not empty using AWS CLI

# First, empty the bucket
aws s3 rm s3://my-happy-bucket --recursive

# Then, delete the bucket itself
aws s3 rb s3://my-happy-bucket