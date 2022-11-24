### How to assume an IAM role using boto3

import boto3
sts_client = boto3.client('sts')

# Call the assume_role method of the STSConnection object and pass the role
assumed_role_object=sts_client.assume_role(
    RoleArn="arn:aws:iam::1234567890:role/name-of-the=role",
    RoleSessionName="MySession"
)

# Get temporary credentials
credentials=assumed_role_object['Credentials']

# Use that role & credentials to create a new session and do something with S3
s3_resource = boto3.resource(
    's3',
    aws_access_key_id=credentials['AccessKeyId'],
    aws_secret_access_key=credentials['SecretAccessKey'],
    aws_session_token=credentials['SessionToken'],
)

for bucket in s3_resource.buckets.all():
    print(bucket.name)