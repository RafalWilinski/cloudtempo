Todos:

- [ ] Cloudformation menu
- [x] License checking
- [ ] Drop us a line
- [x] Actions menu (favorites, aliases, copy arn)
- [ ] Onboarding flow (thanks for installing, bla bla initial scan in the background)
- [ ] Aliases
- [ ] Menu for selecting services with coming soon section inside configuration
- [ ] Improve cors authing
- [x] Store documents with accountId prefix to ensure tenant isolation
- [x] Encode documents with accountId + something to keep it safe
- [x] Get rid of vercel references
- [x] Proper name, description, and app icon
- [ ] Fresh AWS Account for CloudTango

Trials:

- 7 days per `aws-userInfo` cookie
- Similarily to Dynobase, cloudtango uses getOrCreateMachine functionality
- Machine record can be enriched with LicenseKey (licenseKey is indexed)
- License key can be used to activate up to 10 aws identities

- Machine doesn't matter, AWS identity matters (or maybe account?)

Marketing:

- [ ] Lifetime believer plan (50 user identities) for $399 (limited to 25 users)
- [ ] Casual plan (3 user identities) $9/month (or $99/year)
- [ ] Power user plan (50 user identities) $19/month (or $199/year)

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
- [ ] Recently opened section
- [ ] IAM Groups
- [ ] RDS
- [ ] Route53

Current challennge:
Endpoint https://eu-central-1.console.aws.amazon.com/lambda/services/ajax?operation=listFunctions&locale=en
is awesome but does not work for regions that haven't been previously visited.

How to headlessly auth to other regions?
Maybe discover other endpoints, similar to /tb/credentials from dynamodb?
