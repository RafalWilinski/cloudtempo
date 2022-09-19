import pLimit from "p-limit";
import { AES } from "crypto-js";
import { Credentials } from "../../src/lib/getCredentials";
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
export const SECRET_CONST = "cl0udt3mP0";

export type ReindexProps = {
  ddbCredentials: Credentials;
  ecsCredentials: Credentials;
  accountId: string;
  selectedRegions: string[];
  selectedServices: string[];
};

export async function reindex({
  ddbCredentials,
  ecsCredentials,
  accountId,
  selectedRegions,
  selectedServices,
}: ReindexProps) {
  const secretKey = `${SECRET_CONST}-${accountId}`;

  console.log("Reindexing...", {
    ddbCredentials,
    ecsCredentials,
    selectedRegions,
    selectedServices,
    accountId,
  });

  const regionalFetchFunctions = selectedRegions.map((region) =>
    prepareFetchFunctions({
      ddbCredentials,
      ecsCredentials,
      region,
      selectedServices,
    })
  );
  const flattened = regionalFetchFunctions.flat();

  let progress = 0;
  const increment = 1 / flattened.length;
  const failedKeys: string[] = [];

  const all = await Promise.all(
    flattened.map(async (f) => ({
      documents: await f
        .fetch()
        .then((docs) => {
          console.log(`Done! ${f.key}: ${docs.length}`);

          progress += increment;
          reportProgress(f.key, progress);

          return docs;
        })
        .catch((e) => {
          // todo - pass error to the browser
          failedKeys.push(f.key);

          console.error("Failed to load data", e, f.key);

          return [];
        }),
      key: f.key,
    }))
  );

  all.forEach(({ documents, key }) => {
    set(
      `documents#${accountId}#${key}`,
      AES.encrypt(JSON.stringify(documents), secretKey).toString()
    );
  });

  const allDocuments = all.flatMap((a) => a.documents);

  await reinitializeMinisearch(allDocuments, accountId);

  console.log("Reindexing done");

  return { allDocuments, failedKeys };
}

type ProcessRegionProps = {
  ddbCredentials: Credentials;
  selectedServices: string[];
  ecsCredentials: Credentials;
  region: string;
};

type FetchFunctionKeyPair = {
  fetch: () => Promise<Document[]>;
  key: string;
  service: string;
};

function prepareFetchFunctions({
  ddbCredentials,
  ecsCredentials,
  selectedServices,
  region,
}: ProcessRegionProps): FetchFunctionKeyPair[] {
  const fetchFunctions: FetchFunctionKeyPair[] = [
    /// DynamoDB
    {
      fetch: () => limit(() => getAllS3Buckets(ddbCredentials, region)),
      key: `s3#${region}`,
      service: "s3",
    },
    {
      fetch: () => limit(() => getAllLambdaFunctions(ddbCredentials, region)),
      key: `lambda#${region}`,
      service: "lambda",
    },
    {
      fetch: () => limit(() => getAllDynamoDBTables(ddbCredentials, region)),
      key: `dynamodb#${region}`,
      service: "dynamodb",
    },

    /// ECS
    {
      fetch: () =>
        limit(() => getAllCloudformationStacks(ecsCredentials, region)),
      key: `cloudformation#${region}`,
      service: "cloudformation",
    },
    {
      fetch: () =>
        limit(() => getAllCloudwatchLogGroups(ecsCredentials, region)),
      key: `logs#${region}`,
      service: "logs",
    },
    {
      fetch: () => limit(() => getAllCloudwatchAlarms(ecsCredentials, region)),
      key: `alarm#${region}`,
      service: "alarm",
    },
    {
      fetch: () => limit(() => getAllIAMRoles(ecsCredentials, region)),
      key: `iam-roles#${region}`,
      service: "iam-roles",
    },
    {
      fetch: () => limit(() => getAllIAMUsers(ecsCredentials, region)),
      key: `iam-users#${region}`,
      service: "iam-users",
    },
  ];

  return fetchFunctions.filter((f) => selectedServices.includes(f.service));
}

async function reportProgress(key: string, progress: number) {
  // const tabs = await chrome.tabs.query({
  //   active: true,
  // });
  // console.log({ tabs });
  // if (tabs[0]) {
  //   chrome.tabs.sendMessage(tabs[0].id!, {
  //     key,
  //     progress,
  //   });
  // }
}
