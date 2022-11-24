### Get current AWS IAM User ARN using Boto3

import boto3

boto3.client('sts').get_caller_identity().get('Arn')