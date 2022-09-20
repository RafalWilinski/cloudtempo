Todos:

- [x] First install notification
- [x] Cloudformation menu
- [x] License checking
- [x] Drop me a line
- [x] Actions menu (favorites, aliases, copy arn)
- [x] Onboarding flow (thanks for installing, bla bla initial scan in the background)
- [ ] Send an email after purchase (waiting for Postmark confirmation)
- [x] Menu for selecting services with coming soon section inside configuration
- [ ] Improve cors authing - faster, based on retries?
- [x] Store documents with accountId prefix to ensure tenant isolation
- [x] Encode documents with accountId + something to keep it safe
- [x] Get rid of vercel references
- [x] Proper name, description, and app icon
- [x] Fresh AWS Account for CloudTango
- [x] If license key not present, render actual value for X trial left
- [ ] If license key present, do not show "activate" item
- [ ] Deactivate product is license key not present AND timeRemaining negative
- [x] Periodic license checking
- [x] Proper services to selected services menu
- [x] Clearing up input value when navigating to submenu
- [x] Fix toaster
- [ ] Publish to Chrome Web Store
- [ ] Mozilla Extension
- [ ] Edge Extension

Landing:

- [x] Features section
- [x] List supported and planned services
- [ ] Testimonials Section
- [x] FAQ
- [ ] Note from author
- [x] Stay in the loop (newsletter)
- [x] Footer (Roadmap, Twitter,Download, Dynobase, Privacy Policy, Terms of Service, Contact Us)
- [ ] FAQ Page
- [ ] Buy Page
- [x] Sitemap
- [x] Robots.txt

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

- [ ] CloudFormation Resources Menu
- [ ] Scrollbar styling?
- [ ] Aliases
- [ ] Indexing tags
- [ ] Recently opened section
- [ ] IAM Groups
- [ ] RDS
- [ ] Route53

Stack:

- Infra: AWS
- Landing: Vercel
- Emails: Postmark
- Domain: Namecheap (DNS) + Route53 (HZ)
- Shop: LemonSqueezy
