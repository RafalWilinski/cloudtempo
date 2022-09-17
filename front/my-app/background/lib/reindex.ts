import pLimit from "p-limit";
import { Credentials } from "../../src/lib/getCredentials";
import { getCurrentAccountId } from "../../src/lib/getCurrentAccountId";
import { set } from "idb-keyval";
import { reinitializeMinisearch } from "./minisearch";
import { Document } from "../../src/document";
import { getAllS3Buckets } from "../services/s3";
import { getAllLambdaFunctions } from "../services/lambda";
import { getAllDynamoDBTables } from "../services/dynamodb";
import { getAllCloudformationStacks } from "../services/cloudformation";
import {
  getAllCloudwatchAlarms,
  getAllCloudwatchLogGroups,
} from "../services/cloudwatch";
import { getAllIAMRoles, getAllIAMUsers } from "../services/iam";

const limit = pLimit(5);

export type ReindexProps = {
  ddbCredentials: Credentials;
  ecsCredentials: Credentials;
  regions?: string[];
};

export async function reindex({
  ddbCredentials,
  ecsCredentials,
  regions = ["us-east-1", "us-west-2", "eu-central-1"],
}: ReindexProps) {
  console.log("Reindexing...", { ddbCredentials, ecsCredentials });

  const regionalFetchFunctions = regions.map((region) =>
    prepareFetchFunctions({ ddbCredentials, ecsCredentials, region })
  );
  const flattened = regionalFetchFunctions.flat();
  console.log(flattened);

  const all = await Promise.all(
    flattened.map(async (f) => ({
      result: await f.fetch().then((docs) => {
        console.log(`Done! ${f.key}: ${docs.length}`);
        return docs;
      }),
      key: f.key,
    }))
  );

  console.log(all);

  // await set(`documents-${getCurrentAccountId()}`, JSON.stringify(allDocuments));
  // await reinitializeMinisearch(allDocuments);

  console.log("Reindexing done");

  return [];
}

type ProcessRegionProps = {
  ddbCredentials: Credentials;
  ecsCredentials: Credentials;
  region: string;
};

type FetchFunctionKeyPair = {
  fetch: () => Promise<Document[]>;
  key: string;
};

function prepareFetchFunctions({
  ddbCredentials,
  ecsCredentials,
  region,
}: ProcessRegionProps): FetchFunctionKeyPair[] {
  const fetchFunctions: FetchFunctionKeyPair[] = [
    /// DynamoDB
    {
      fetch: () => limit(() => getAllS3Buckets(ddbCredentials, region)),
      key: `s3#${region}`,
    },
    {
      fetch: () => limit(() => getAllLambdaFunctions(ddbCredentials, region)),
      key: `lambda#${region}`,
    },
    {
      fetch: () => limit(() => getAllDynamoDBTables(ddbCredentials, region)),
      key: `dynamodb#${region}`,
    },

    /// ECS
    {
      fetch: () =>
        limit(() => getAllCloudformationStacks(ecsCredentials, region)),
      key: `cloudformation#${region}`,
    },
    {
      fetch: () =>
        limit(() => getAllCloudwatchLogGroups(ecsCredentials, region)),
      key: `logs#${region}`,
    },
    {
      fetch: () => limit(() => getAllCloudwatchAlarms(ecsCredentials, region)),
      key: `alarm#${region}`,
    },
    {
      fetch: () => limit(() => getAllIAMRoles(ecsCredentials, region)),
      key: `iam-roles#${region}`,
    },
    {
      fetch: () => limit(() => getAllIAMUsers(ecsCredentials, region)),
      key: `iam-users#${region}`,
    },
  ];

  return fetchFunctions;
}

// async function processRegion({
//   ecsCredentials,
//   ddbCredentials,
//   region,
// }: ProcessRegionProps): Promise<Document[]> {
//   const [
//     allBuckets,
//     allFunctions,
//     allTables,
//     allCloudformationStacks,
//     allLogGroups,
//     allAlarms,
//     allIamRoles,
//     allIamUsers,
//   ] = await Promise.all([
//     /// DynamoDB
//     getAllS3Buckets(ddbCredentials, region),
//     getAllLambdaFunctions(ddbCredentials, region),
//     getAllDynamoDBTables(ddbCredentials, region),
//     /// ECS
//     getAllCloudformationStacks(ecsCredentials, region),
//     getAllCloudwatchLogGroups(ecsCredentials, region),
//     getAllCloudwatchAlarms(ecsCredentials, region),
//     getAllIAMRoles(ecsCredentials, region),
//     getAllIAMUsers(ecsCredentials, region),
//   ]);

//   const documents = [
//     /// DynamoDB
//     ...allBuckets,
//     ...allFunctions,
//     ...allTables,

//     /// ECS
//     ...allCloudformationStacks,
//     ...allLogGroups,
//     ...allAlarms,
//     ...allIamRoles,
//     ...allIamUsers,
//   ];

//   // await set(`documents-${region}`, JSON.stringify(documents));

//   return documents;
// }
