const htmlBody = `<div id="aws-search-app"></div><div aws-search-extensionid="${chrome.runtime.id}"></div>`;

document.body.insertAdjacentHTML("beforeend", htmlBody);

const awsSdkScriptElement = document.createElement("script");
awsSdkScriptElement.src = chrome.runtime.getURL("./aws-sdk.js");
awsSdkScriptElement.type = "module";
(document.head || document.documentElement).appendChild(awsSdkScriptElement);

const scriptElement = document.createElement("script");
scriptElement.src = chrome.runtime.getURL(scriptPath);
scriptElement.type = "module";
(document.head || document.documentElement).appendChild(scriptElement);

const linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = chrome.runtime.getURL(stylesPath);
(document.head || document.documentElement).appendChild(linkElement);

console.log("AWS Search Extension injected!");

const reindexingProgressChannel = new BroadcastChannel(
  "reindexing-progress-channel"
);

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === "reindexing-progress") {
    reindexingProgressChannel.postMessage(request);
  } else if (request.type === "getDynamoDBCsrfToken") {
    console.log("content.js getDynamoDBCsrfToken");
  }
});
