# CloudTempo

> With the introduction of AWS Resources Explorer, it doesn't make too much sense to try to monetise @\_cloudtempo anymore.
> Instead, I was thinking about making whole project OSS - from the secret indexing sauce, extension, landing, payment processing and others.

Enjoy!

Big thanks to [Ian Mckay](https://twitter.com/iann0036) for making this possible!

## Prerequisites:

```
git clone https://github.com/iann0036/aws-sdk-serviceworker
```

Stack:

- Infra: AWS (CDK used to provision bunch of Lambdas, APIGW, DynamoDB)
- Landing: Vercel
- Emails: Postmark
- Domain: Namecheap (DNS) + Route53 (HZ)
- Shop: LemonSqueezy
- App (Chrome Extension): React + @radix-ui + [cmdk](https://cmdk.paco.me)
