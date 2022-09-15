/// <reference types="aws-sdk" />
import MiniSearch from "minisearch";
import { get, set } from "idb-keyval";
import { Document } from "../src/document";

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
  console.log("Received message", request);

  if (request.type === "reindex") {
    sendResponse(await reindex(request.credentials));
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
  credentials: any,
  regions = ["us-east-1", "eu-central-1", "us-west-2"]
) {
  console.log("Reindexing...", { credentials });

  const documentsFromRegions = await Promise.all(
    regions.map((region) => processRegion(credentials, region))
  );
  const allDocuments: Document[] = ([] as Document[]).concat.apply(
    [],
    documentsFromRegions
  );

  await set("documents", JSON.stringify(allDocuments));

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
  const [allBuckets, allFunctions, allTables] = await Promise.all([
    getAllS3Buckets(credentials, region),
    getAllLambdaFunctions(credentials, region),
    getAllDynamoDBTables(credentials, region),
  ]);

  const documents = [...allBuckets, ...allFunctions, ...allTables];

  await set(`documents-${region}`, JSON.stringify(documents));

  return documents;
}

async function getAllS3Buckets(
  credentials: any,
  region: string
): Promise<Document[]> {
  if (region !== "us-east-1") {
    return [];
  }

  const s3 = new AWS.S3({
    credentials,
    region,
  });

  const response = await s3.listBuckets().promise();

  return (response.Buckets ?? []).map((bucket: any) => ({
    name: bucket.Name,
    awsService: "s3",
    arn: `arn:aws:s3:::${bucket.Name}`,
    region,
  }));
}

async function getAllLambdaFunctions(
  credentials: any,
  region: string
): Promise<Document[]> {
  const lambda = new AWS.Lambda({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let functions: Document[] = [];

  do {
    const response: any = await lambda
      .listFunctions({
        Marker: token,
      })
      .promise();

    functions = [
      ...functions,
      ...(response.Functions ?? []).map((fn: any) => ({
        name: fn.FunctionName,
        arn: fn.FunctionArn,
        description: fn.Description,
        awsService: "lambda",
        region,
      })),
    ];
    token = response.NextMarker;
    firstRun = false;
  } while (token || firstRun);

  return functions;
}

async function getAllDynamoDBTables(credentials: any, region: string) {
  const dynamo = new AWS.DynamoDB({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let tables: Document[] = [];

  do {
    const response: any = await dynamo
      .listTables({
        ExclusiveStartTableName: token,
      })
      .promise();

    tables = [
      ...tables,
      ...(response.TableNames ?? []).map((name: string) => ({
        name,
        arn: `arn:aws:dynamodb:${region}:${credentials.accountId}:table/${name}`,
        awsService: "dynamodb",
        region,
      })),
    ];
    token = response.NextMarker;
    firstRun = false;
  } while (token || firstRun);

  return tables;
}
