# CloudTempo

> With the introduction of AWS Resources Explorer, it doesn't make too much sense to try to monetise @\_cloudtempo anymore.
> Instead, I was thinking about making whole project OSS - from the secret indexing sauce, extension, landing, payment processing and others.

> Enjoy! 🎉

> Big thanks to [Ian Mckay](https://twitter.com/iann0036) for making this possible!

Stack:

- App (Chrome Extension): React + @radix-ui + [cmdk](https://cmdk.paco.me)
- Infra: AWS (CDK used to provision bunch of Lambdas, APIGW, DynamoDB)
- Landing: Vercel
- Emails: Postmark
- Domain: Namecheap (DNS) + Route53 (HZ)
- Shop: LemonSqueezy
- Search Engine: Minisearch

## Prerequisites:

```
git clone https://github.com/iann0036/aws-sdk-serviceworker
```

## Chrome Extension

Chrome Extension is being composed of a few parts:

- Service worker - the actual "backend" of the extension responsible for indexing AWS resources and performing searches (`app/background/background.ts`, build with esbuild to `background.js`)
- Frontend - React app that's being injected into AWS Console (`app/src/App.tsx`)
- Content Script - a thin shim that allows mounting frontend into AWS Console. It also acts as a bridge between frontend and service worker using [`BroadcastChannel`](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) API for reporting indexing progress.

### Building

```sh
cd app
npm i
npm run build:full
npm run zip
```

The generated ZIP file can be loaded in your browser by navigating to `chrome://extensions/` URL. More detailed instructions can be found [here](https://cloudtempo.dev/beta)

### Service Worker

Backend responds to following messages of following `type`:
- `getLicenseInfo` - calls CloudTempo Licensing API checking if current IAM identity has a registered license
- `checkVersion` - calls Vercel's Function to check latest version and fetch the changelog
- `markAsFavourite` - marks selected resource as favourite making it appearing always at the top of the results list
- `getLastReindexDate` - returns last date of the reindexing
- `reindex` - fetches valid console IAM credentials and start account reindeing process
- `feedback` - send a feedback to the CloudTempo's backend
- `openInNewTab` - opens selected `url` in a new tab

Apart from that:
- Requests containing parameter `q` are interpreted as search prompts
- Requests containing parameter `openUrl` are interpreted as URL navigation prompts
- Requests containing parameter `licenseKey` are interpreted as requests to register the license

#### Credentials

CloudTempo works without providing any credentials. It does it by fetching credentials (app/src/lib/getCredentials.ts) from two undocumented endpoints: `https://us-east-1.console.aws.amazon.com/dynamodbv2/tb/creds` and `https://us-east-1.console.aws.amazon.com/ecs/v2/tb/creds`.

These endpoints, if called with a valid `X-CSRF-Token`, and a set of valid, current session cookies will return you a set of temporary credentials allowing to do a bunch of read operations via AWS SDK slightly modified by [Ian Mckay](https://twitter.com/iann0036) to make it [usable in the service worker](https://github.com/iann0036/aws-sdk-serviceworker).

#### Search and Indexing

CloudTempo uses [minisearch](https://lucaong.github.io/minisearch/) hosted in the service worker for indexing and searching. 

[Reindexing](https://github.com/RafalWilinski/cloudtempo/blob/main/app/src/lib/reindexing.ts) is done by calling a bunch of `list*` or `describe*` SDK methods on every region and storing their result encrypted locally using [IndexedDB](https://github.com/jakearchibald/idb-keyval). Results for each [account, service, region] are stored in a separate IndexedDB item. 

[Searching](https://github.com/RafalWilinski/cloudtempo/blob/main/app/background/lib/minisearch.ts) uses a minisearch's singleton instance. On search instantiation, it tries to fetch stored IndexedDB entries for current account ID, bundles them into one index and performs an actual search.


## Backend

Historically, backend was used to process events from LemonSqueezy (Payments gateway), check users' license/trial, activate their licenses/accounts and gather feedback. Lambdas 
