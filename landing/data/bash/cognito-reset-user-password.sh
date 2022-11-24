### How to programmatically reset user's password in AWS Cognito using AWS CLI

aws cognito-idp admin-set-user-password \
  --user-pool-id us-west-2_uhYSMyXXX \ # Replace with your user pool ID
  --username john.doe@my-startup.com \
  --password s3cReTpaSsW0rd \
  --region us-east-1 # or any other region
