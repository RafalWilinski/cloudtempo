### How to get all Lambda functions in a region using boto3

import boto3

# Create Lambda client
client = boto3.client(
  'lambda',
  # Replace with your region like us-east-1
  region_name='us-west-2'
)

response = client.list_functions()

# Print Lambda functions
print(response)
