/// <reference types="aws-sdk" />
import MiniSearch from "minisearch";
import { get, set } from "idb-keyval";
import { Document } from "../src/document";
import { getAllDynamoDBTables } from "./services/dynamodb";
import { getAllLambdaFunctions } from "./services/lambda";
import { getAllS3Buckets } from "./services/s3";
import { getAllCloudformationStacks } from "./services/cloudformation";
import {
  Credentials,
  getDynamoDBCredentials,
  getECSCredentials,
} from "../src/lib/getCredentials";
import { getCurrentAccountId } from "../src/lib/getCurrentAccountId";

let minisearch: MiniSearch | undefined;

importScripts("aws-sdk.js");

console.log("Dependencies loaded");

const CUSTOM_SPACE_OR_PUNCT = /[\n\r -_]+/u;

function createMinisearch() {
  return new MiniSearch({
    fields: ["name"],
    storeFields: ["name", "arn", "awsService", "region"],
    idField: "arn",
    searchOptions: {
      boost: { awsService: 2 },
      fuzzy: 0.3,
      prefix: true,
    },
    tokenize: (text: string) => [
      ...text
        .split(CUSTOM_SPACE_OR_PUNCT)
        .map((t) => t.replace(/([a-z])([A-Z])/g, "$1 $2"))
        .map((s) => s.toLowerCase()),
    ],
  });
}

chrome.runtime.onMessageExternal.addListener(async function (
  request,
  _sender,
  sendResponse
) {
  console.log("MSG", request);

  if (request.type === "reindex") {
    const ddbCredentials = await getDynamoDBCredentials();
    const ecsCredentials = await getECSCredentials();

    console.log({ ddbCredentials, ecsCredentials });

    sendResponse(await reindex(ddbCredentials));
  } else if (request.q) {
    const results = (await getOrInitializeMinisearch()).search(request.q);
    sendResponse(results);
  }
});

async function getOrInitializeMinisearch() {
  if (minisearch) {
    return minisearch;
  }

  console.log("Minisearch not initialized, initializing...");

  const documents = JSON.parse((await get("documents")) || "{}");

  minisearch = createMinisearch();
  minisearch.addAll(documents);

  console.log(JSON.stringify(minisearch));

  return minisearch;
}

async function reindex(
  dynamodbCredentials: Credentials,
  regions = ["us-east-1", "eu-central-1", "us-west-2"]
) {
  console.log("Reindexing...", { dynamodbCredentials });

  const documentsFromRegions = await Promise.all(
    regions.map((region) => processRegion(dynamodbCredentials, region))
  );
  const allDocuments: Document[] = ([] as Document[]).concat.apply(
    [],
    documentsFromRegions
  );

  await set(`documents-${getCurrentAccountId()}`, JSON.stringify(allDocuments));

  if (minisearch) {
    minisearch.removeAll();
    minisearch = createMinisearch();
    minisearch.addAll(allDocuments);
  } else {
    await getOrInitializeMinisearch();
  }

  console.log("Reindexing done");

  return allDocuments;
}

async function processRegion(
  credentials: any,
  region: string
): Promise<Document[]> {
  const [allBuckets, allFunctions, allTables, allCloudformationStacks] =
    await Promise.all([
      getAllS3Buckets(credentials, region),
      getAllLambdaFunctions(credentials, region),
      getAllDynamoDBTables(credentials, region),
      getAllCloudformationStacks(credentials, region),
    ]);

  const documents = [
    ...allBuckets,
    ...allFunctions,
    ...allTables,
    ...allCloudformationStacks,
  ];

  await set(`documents-${region}`, JSON.stringify(documents));

  return documents;
}
