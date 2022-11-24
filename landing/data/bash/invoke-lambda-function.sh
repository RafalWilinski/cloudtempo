### Invoking AWS Lambda function using AWS CLI

# Synchronous, blocking invocation
aws lambda invoke --function-name my-function \
 --cli-binary-format raw-in-base64-out \
 --payload '{ "someKey": "abc" }' response.json

# Synchronous with logs returned to the console
aws lambda invoke --function-name my-function out \
  --log-type Tail \
  --query 'LogResult' --output text |  base64 -d

# Asynchronous, non-blocking invocation
aws lambda invoke --function-name my-function \
 --cli-binary-format raw-in-base64-out \
 --payload '{ "someKey": "123" }' \
 --invocation-type Event response.json

