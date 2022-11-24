### Get current AWS account ID using AWS CLI
aws sts get-caller-identity --query Account --output text
