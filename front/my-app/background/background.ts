/// <reference types="aws-sdk" />
import {
  getDynamoDBCredentials,
  getECSCredentials,
} from "../src/lib/getCredentials";
import { getOrInitializeMinisearch } from "./lib/minisearch";
import { reindex } from "./lib/reindex";

importScripts("aws-sdk.js");

console.log("Dependencies loaded");

chrome.runtime.onMessageExternal.addListener(async function (
  request,
  _sender,
  sendResponse
) {
  console.log("MSG", request);

  if (request.type === "reindex") {
    const [ddbCredentials, ecsCredentials] = await Promise.all([
      getDynamoDBCredentials(),
      getECSCredentials(),
    ]);

    sendResponse(await reindex({ ddbCredentials, ecsCredentials }));
  } else if (request.q) {
    const results = (await getOrInitializeMinisearch()).search(request.q);
    sendResponse(results);
  }
});
