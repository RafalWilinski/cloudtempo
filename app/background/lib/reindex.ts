import pLimit from "p-limit";
import { AES } from "crypto-js";
import { Credentials } from "../../src/lib/getCredentials";
import { get, set } from "idb-keyval";
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
import { getAllEC2Instances } from "../services/ec2";
import { getAllECSClusters, getAllECSServices } from "../services/ecs";
import { getAllDAXClusters } from "../services/dax";
import {
  getAllSecurityGroups,
  getAllSubnets,
  getAllVPCs,
} from "../services/vpc";
import { getAllSNSTopics } from "../services/sns";

const limit = pLimit(15);
export const SECRET_CONST = "cl0udt3mP0";

export type ReindexProps = {
  ddbCredentials: Credentials;
  ecsCredentials: Credentials;
  accountId: string;
  selectedRegions: string[];
  selectedServices: string[];
  sender: chrome.runtime.MessageSender;
};

export async function reindex({
  ddbCredentials,
  ecsCredentials,
  accountId,
  selectedRegions,
  selectedServices,
  sender,
}: ReindexProps) {
  const secretKey = `${SECRET_CONST}-${accountId}`;

  ddbCredentials.accountId = accountId;
  ecsCredentials.accountId = accountId;

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
          reportProgress(
            sender.tab!.id!,
            f.key,
            progress,
            true,
            flattened.length,
            docs.length
          );

          return docs;
        })
        .catch((e) => {
          // todo - pass error to the browser
          failedKeys.push(f.key);

          progress += increment;

          console.error("Failed to load data", e, f.key);

          reportProgress(
            sender.tab!.id!,
            f.key,
            progress,
            false,
            flattened.length,
            0
          );

          return [];
        }),
      key: f.key,
    }))
  );

  all.forEach(async ({ documents, key }) => {
    await set(
      `documents#${accountId}#${key}`,
      AES.encrypt(JSON.stringify(documents), secretKey).toString()
    );
  });

  const lastReindexDate = new Date().toISOString();
  await set(`lastReindex#${accountId}`, lastReindexDate);

  const allDocuments = all.flatMap((a) => a.documents);

  await reinitializeMinisearch(allDocuments, accountId);

  console.log("Reindexing done");

  return {
    allDocuments,
    failedKeys,
    totalJobsCount: flattened.length,
    lastReindexDate,
  };
}

export async function getLastReindexDate(accountId: string) {
  return await get(`lastReindex#${accountId}`);
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
    {
      fetch: () => limit(() => getAllDAXClusters(ddbCredentials, region)),
      key: `dax#${region}`,
      service: "dax",
    },
    {
      fetch: () => limit(() => getAllSubnets(ddbCredentials, region)),
      key: `ec2_subnet#${region}`,
      service: "ec2_subnet",
    },
    {
      fetch: () => limit(() => getAllSecurityGroups(ddbCredentials, region)),
      key: `ec2_sg#${region}`,
      service: "ec2_sg",
    },
    {
      fetch: () => limit(() => getAllVPCs(ddbCredentials, region)),
      key: `ec2_vpc#${region}`,
      service: "ec2_vpc",
    },
    {
      fetch: () => limit(() => getAllSNSTopics(ddbCredentials, region)),
      key: `sns#${region}`,
      service: "sns_topic",
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
      key: `iam_role#${region}`,
      service: "iam_role",
    },
    {
      fetch: () => limit(() => getAllIAMUsers(ecsCredentials, region)),
      key: `iam_user#${region}`,
      service: "iam_user",
    },
    {
      fetch: () => limit(() => getAllEC2Instances(ecsCredentials, region)),
      key: `ec2#${region}`,
      service: "ec2",
    },
    {
      fetch: () => limit(() => getAllECSClusters(ecsCredentials, region)),
      key: `ecs_cluster#${region}`,
      service: "ecs_cluster",
    },
    {
      fetch: () => limit(() => getAllECSServices(ecsCredentials, region)),
      key: `ecs_service#${region}`,
      service: "ecs_service",
    },
  ];

  return fetchFunctions.filter((f) => selectedServices.includes(f.service));
}

async function reportProgress(
  tabId: number,
  key: string,
  progress: number,
  isSuccess: boolean,
  totalCount: number,
  addedCount: number
) {
  chrome.tabs.sendMessage(tabId, {
    type: "reindexing-progress",
    key,
    progress,
    isSuccess,
    totalCount,
    addedCount,
  });
}
