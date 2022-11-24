### Create programmatically a user in AWS Cognito using AWS CLI

aws cognito-idp admin-create-user \
  --user-pool-id us-west-2_uhYSMyXXX \ # Replace with your user pool ID
  --username john@doe.com \
  --user-attributes Name=email,Value=john@doe.com \
  --temporary-password s3cReTpaSsW0rd \
  --region us-east-1 # or any other region
