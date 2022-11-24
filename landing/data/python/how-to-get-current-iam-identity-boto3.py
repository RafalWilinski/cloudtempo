### How to get current AWS STS/IAM identity using boto3

import boto3

# Create STS client
sts = boto3.client('sts')

# Call STS to get details on current identity
response = sts.get_caller_identity()

# Print the response
print(response)
