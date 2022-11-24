### Assuming AWS IAM role using AWS CLI
aws sts assume-role \
  --role-arn "arn:aws:iam::123456789012:role/MyRole" \
  --role-session-name "MySession" \
  --duration-seconds 3600 # one hour, optional