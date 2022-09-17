Todos:

- [ ] Cloudformation menu
- [ ] License checking
- [ ] Indexing tags
- [ ] Drop us a line
- [ ] Store documents with accountId prefix to ensure tenant isolation
- [ ] Encode documents with accountId + something to keep it safe
- [ ] Onboarding flow (thanks for installing, bla bla initial scan in the background)
- [ ] Recently opened section
- [ ] Aliases
- [ ] Menu for selecting services with coming soon section inside configuration
- [ ] Get rid of vercel references

Marketing:

- [ ] Lifetime believer plan

Services for initial launch:

- [x] Lambda - covered by DynamoDB & ECS
- [x] DynamoDB - covered by DynamoDB
- [x] S3 - covered by DynamoDB
- [x] CloudFormation - covered by ECS
- [ ] Cloudwatch Logs - covered by ECS
- [ ] IAM (Roles, Users, Policies) - covered by ECS
- [ ] EC2 (Instances) - covered by ECS
- [ ] VPC (VPCs, Subnets, SGs) - covered by ECS
- [ ] ECS (Clusters, Services) - covered by ECS

Later add:

- RDS
- Route53

Current challennge:
Endpoint https://eu-central-1.console.aws.amazon.com/lambda/services/ajax?operation=listFunctions&locale=en
is awesome but does not work for regions that haven't been previously visited.

How to headlessly auth to other regions?
Maybe discover other endpoints, similar to /tb/credentials from dynamodb?
