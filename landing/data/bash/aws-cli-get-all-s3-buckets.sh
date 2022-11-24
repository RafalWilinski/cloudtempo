### How to get all S3 buckets using AWS CLI
aws s3api list-buckets --query 'Buckets[].Name' --output text
