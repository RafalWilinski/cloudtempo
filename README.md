Todos:

- [x] First install notification
- [x] Cloudformation menu
- [x] License checking
- [x] Drop me a line
- [x] Actions menu (favorites, aliases, copy arn)
- [x] Onboarding flow (thanks for installing, bla bla initial scan in the background)
- [x] Menu for selecting services with coming soon section inside configuration
- [x] Store documents with accountId prefix to ensure tenant isolation
- [x] Encode documents with accountId + something to keep it safe
- [x] Get rid of vercel references
- [x] Proper name, description, and app icon
- [x] Fresh AWS Account for CloudTango
- [x] If license key not present, render actual value for X trial left
- [x] If license key present, do not show "activate" item
- [x] Periodic license checking
- [x] Proper services to selected services menu
- [x] Clearing up input value when navigating to submenu
- [x] Fix toaster
- [x] Deactivate product is license key not present AND timeRemaining negative
- [x] Improve cors authing - faster, based on retries?
- [x] Toast z-index
- [x] GET /alpha
- [x] Send an email after purchase (waiting for Postmark confirmation)
- [x] Last indexing text is fixed, should be dynamic
- [x] Open in a new tab is broken
- [x] Because last reindexed date is stored in a cookie, it doesn't show when changing from AWS Console to S3 console (should be moved to the worker)
- [ ] Get rid of all Cookies.set calls (unreliable)
- [ ] Welcome notification appears twice (cookies are unreliable)
- [ ] If index not ran and onboarding completed, show a banner to run indexing
- [ ] Publish to Chrome Web Store
- [ ] Mozilla Extension
- [ ] Publish Edge Extension
- [ ] Same with onboarding
- [ ] Clicking Selected Regions/services does not work (only checkbox, text is fine)
- [ ] Cron running reindex every day
- [ ] Icons are broken if visiting other regions, figure way to bundle images
- [ ] Selecting DynamoDB option does not work?

Landing:

- [x] Features section
- [x] List supported and planned services
- [x] FAQ
- [x] Stay in the loop (newsletter)
- [x] Footer (Roadmap, Twitter,Download, Dynobase, Privacy Policy, Terms of Service, Contact Us)
- [x] Sitemap
- [x] Robots.txt
- [x] Privacy Policy Page
- [ ] Testimonials Section
- [ ] Note from author
- [ ] FAQ Page
- [ ] Buy Page
- [ ] Nicer roadmap
- [ ] If on phone, email me a link
- [ ] Yearly options

Trials:

- 7 days per `aws-userInfo` cookie
- Similarily to Dynobase, cloudtango uses getOrCreateMachine functionality
- Machine record can be enriched with LicenseKey (licenseKey is indexed)
- License key can be used to activate up to 10 aws identities
- Machine doesn't matter, AWS identity matters (or maybe account?)

Marketing:

- [ ] Lifetime believer plan (50 user identities) for $399 (limited to 25 users)
- [x] Casual plan (3 user identities) $9/month (or $99/year)
- [x] Power user plan (50 user identities) $19/month (or $199/year)

Services for initial launch:

- [x] Lambda - covered by DynamoDB & ECS
- [x] DynamoDB - covered by DynamoDB
- [x] S3 - covered by DynamoDB
- [x] CloudFormation - covered by ECS
- [x] Cloudwatch Logs - covered by ECS
- [x] IAM (Roles, Users) - covered by ECS
- [x] EC2 (Instances) - covered by ECS
- [ ] VPC (VPCs, Subnets, SGs) - covered by ECS
- [ ] ECS (Clusters, Services) - covered by ECS

Later add:

- [ ] CloudFormation Resources Menu / Tree view
- [ ] Scrollbar styling?
- [ ] Search configuration
- [ ] Aliases
- [ ] Indexing tags
- [ ] Recently opened section
- [ ] IAM Groups
- [ ] SSM Parameter Store
- [ ] Secrets Manager
- [ ] RDS
- [ ] Route53

Stack:

- Infra: AWS
- Landing: Vercel
- Emails: Postmark
- Domain: Namecheap (DNS) + Route53 (HZ)
- Shop: LemonSqueezy

Edge review note:

This extension is an overlay for AWS Console (Amazon Web Services). After installing, please head to https://847163508457.signin.aws.amazon.com/console and use following credentials to login:

username: edge-review
password: edge-review-12345

After doing so, you can open actual extension by pressing CTRL + M or CMD + K.
