### Listing all EC2 instances

aws ec2 describe-instances

# If you want to narrow down the results by instance type, you can use the --filters option:
aws ec2 describe-instances --filters "Name=instance-type,Values=t3.micro"
