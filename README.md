# CloudTempo

> With the introduction of AWS Resources Explorer, it doesn't make too much sense to try to monetise @\_cloudtempo anymore.
> Instead, I was thinking about making whole project OSS - from the secret indexing sauce, extension, landing, payment processing and others.

Enjoy! 🎉

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

## Chrome Extension

Chrome Extension is being composed of a few parts:

- Service worker - the actual "backend" of the extension responsible for indexing AWS resources and performing searches (`app/background/background.ts`)
- Frontend - React app that's being injected into AWS Console (`app/src/App.tsx`)
- Content Script - a shim that allows mounting frontend into AWS Console. It also acts as a bridge between frontend and service worker using [`BroadcastChannel`](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) API for reporting indexing progress.
