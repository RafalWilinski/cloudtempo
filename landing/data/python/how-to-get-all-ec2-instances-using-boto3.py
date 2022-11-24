### How to get all EC2 instances using boto3

import boto3

# Create EC2 client
ec2 = boto3.client(
  'ec2',
  # Replace with your region like us-east-1
  region_name='us-west-2'
)

# Call EC2 to describe all instances
response = ec2.describe_instances()

# Print the response
print(response)
