const stylesPath = "./dist/index.74c16976.css";
const scriptPath = "./dist/index.03bd4608.js";
const htmlBody = `<div id="aws-search-app"></div><div aws-search-extensionid="${chrome.runtime.id}"></div>`;

document.body.insertAdjacentHTML("beforeend", htmlBody);

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
  }
});
