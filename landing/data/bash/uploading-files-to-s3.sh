### How to upload file(s) to AWS S3

# Single file
aws s3 cp ./some-local-directory/file.txt s3://my-happy-bucket/

# Multiple files and directories recursively
aws s3 cp ./some-local-directory s3://my-happy-bucket/dir --recursive

# Applying filters, e.g. uploading only files with .jpg extension
aws s3 cp ./some-local-directory s3://my-happy-bucket/dir \
  --recursive \
  --exclude * \
  --include *.jpg
