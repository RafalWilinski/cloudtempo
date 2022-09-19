/// <reference types="aws-sdk" />
import {
  getDynamoDBCredentials,
  getECSCredentials,
} from "../src/lib/getCredentials";
import { getOrInitializeMinisearch } from "./lib/minisearch";
import { checkUser, registerLicenseKey } from "./lib/checkUser";
import { reindex } from "./lib/reindex";
import { sendFeedback } from "./lib/feedback";

importScripts("aws-sdk.js");

console.log("CloudTempo started");

chrome.runtime.onMessageExternal.addListener(async function (
  request,
  _sender,
  sendResponse
) {
  const licenseInfo = checkUser(request.userInfo);

  if (request.type === "reindex") {
    const [ddbCredentials, ecsCredentials] = await Promise.all([
      getDynamoDBCredentials(),
      getECSCredentials(),
    ]);

    const { allDocuments, failedKeys, totalJobsCount } = await reindex({
      ddbCredentials,
      ecsCredentials,
      accountId: request.accountId,
      selectedServices: request.selectedServices,
      selectedRegions: request.selectedRegions,
    });

    sendResponse({
      response: allDocuments,
      userInfo: await licenseInfo,
      failedKeys,
      totalJobsCount,
    });
  } else if (request.licenseKey) {
    sendResponse(
      await registerLicenseKey(request.licenseKey, request.userInfo)
    );
  } else if (request.q) {
    const results = (await getOrInitializeMinisearch(request.accountId)).search(
      request.q
    );
    sendResponse({ results, userInfo: await licenseInfo });
  } else if (request.openUrl) {
    chrome.tabs.create({ url: request.openUrl });
    sendResponse({});
  } else if (request.type === "feedback") {
    sendResponse(await sendFeedback(request));
  }
});
