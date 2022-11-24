### Downloading file(s) (and directories) from S3

# Single file
aws s3 cp s3://my-happy-bucket/file.txt ./some-local-directory/

# Whole directory with subdirectories
aws s3 cp s3://my-happy-bucket/dir ./some-local-directory/ --recursive
