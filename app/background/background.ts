/// <reference types="aws-sdk" />
import {
  getDynamoDBCredentials,
  getECSCredentials,
} from "../src/lib/getCredentials";
import { search, markAsFavourite } from "./lib/minisearch";
import { checkUser, registerLicenseKey } from "./lib/checkUser";
import { getLastReindexDate, reindex } from "./lib/reindex";
import { sendFeedback } from "./lib/feedback";
import { checkVersion } from "./lib/checkVersion";

importScripts("aws-sdk.js");

console.log("CloudTempo started");

chrome.runtime.onMessageExternal.addListener(async function (
  request,
  sender,
  sendResponse
) {
  if (request.type === "getLicenseInfo") {
    sendResponse(await checkUser(request.userInfo));
  } else if (request.type === "checkVersion") {
    sendResponse(await checkVersion());
  } else if (request.type === "markAsFavourite") {
    const results = await search(request.accountId, request.q);
    console.log({ potentialFavourite: results[0] });
    if (results[0]) {
      await markAsFavourite(request.accountId, results[0]);
    }
  } else if (request.type === "getLastReindexDate") {
    sendResponse(await getLastReindexDate(request.accountId));
  } else if (request.type === "reindex") {
    const [ddbCredentials, ecsCredentials] = await Promise.all([
      getDynamoDBCredentials(),
      getECSCredentials(),
    ]);

    const { allDocuments, failedKeys, totalJobsCount, lastReindexDate } =
      await reindex({
        ddbCredentials,
        ecsCredentials,
        accountId: request.accountId,
        selectedServices: request.selectedServices,
        selectedRegions: request.selectedRegions,
        sender,
      });

    sendResponse({
      lastReindexDate,
      response: allDocuments,
      failedKeys,
      totalJobsCount,
    });
  } else if (request.licenseKey) {
    sendResponse(
      await registerLicenseKey(request.licenseKey, request.userInfo)
    );
  } else if (request.q) {
    const results = await search(request.accountId, request.q);
    sendResponse({ results });
  } else if (request.openUrl) {
    chrome.tabs.create({ url: request.openUrl });
    sendResponse({});
  } else if (request.type === "feedback") {
    sendResponse(await sendFeedback(request));
  } else if (request.type === "openInNewTab") {
    chrome.tabs.create({ url: request.url, active: true });
    sendResponse({});
  }
});
