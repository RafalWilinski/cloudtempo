### How to get the size of an S3 bucket (sum of all objects) using the AWS CLI
aws s3 ls s3://myBucket --recursive --human-readable --summarize

# Or if you want to get the size of a specific folder in the bucket
aws s3 ls s3://myBucket/some/folder --recursive --human-readable --summarize
