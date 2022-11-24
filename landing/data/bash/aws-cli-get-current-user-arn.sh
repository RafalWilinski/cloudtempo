### Get current AWS user ARN using AWS CLI
aws sts get-caller-identity --query Arn --output text
