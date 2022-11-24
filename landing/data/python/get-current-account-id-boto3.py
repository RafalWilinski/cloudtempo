### Get current AWS Account ID using Boto3

import boto3

boto3.client('sts').get_caller_identity().get('Account')