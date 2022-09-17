Todos:

- [ ] Cloudformation menu
- [ ] License checking
- [ ] Drop us a line
- [ ] Actions menu (favorites, aliases, copy arn)
- [x] Store documents with accountId prefix to ensure tenant isolation
- [x] Encode documents with accountId + something to keep it safe
- [ ] Onboarding flow (thanks for installing, bla bla initial scan in the background)
- [ ] Recently opened section
- [ ] Aliases
- [ ] Menu for selecting services with coming soon section inside configuration
- [x] Get rid of vercel references
- [ ] Proper name, description, and app icon

Marketing:

- [ ] Lifetime believer plan

Services for initial launch:

- [x] Lambda - covered by DynamoDB & ECS
- [x] DynamoDB - covered by DynamoDB
- [x] S3 - covered by DynamoDB
- [x] CloudFormation - covered by ECS
- [x] Cloudwatch Logs - covered by ECS
- [x] IAM (Roles, Users) - covered by ECS
- [ ] EC2 (Instances) - covered by ECS
- [ ] VPC (VPCs, Subnets, SGs) - covered by ECS
- [ ] ECS (Clusters, Services) - covered by ECS

Later add:

- [ ] Indexing tags
- IAM Groups
- RDS
- Route53

Current challennge:
Endpoint https://eu-central-1.console.aws.amazon.com/lambda/services/ajax?operation=listFunctions&locale=en
is awesome but does not work for regions that haven't been previously visited.

How to headlessly auth to other regions?
Maybe discover other endpoints, similar to /tb/credentials from dynamodb?
