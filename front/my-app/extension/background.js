console.log("Background.js started");

chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );

  console.log(request);

  fetch(
    `https://qrda6vijsce767dglefttcrrcy0uldfr.lambda-url.us-east-1.on.aws/?q=${request.q}`
  )
    .then((res) => res.json())
    .then((res) => sendResponse(res));
});

chrome.runtime.onMessageExternal.addListener(async function (
  request,
  sender,
  sendResponse
) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );

  console.log(request);

  fetch(
    `https://qrda6vijsce767dglefttcrrcy0uldfr.lambda-url.us-east-1.on.aws/?q=${request.q}`
  )
    .then((res) => res.json())
    .then((res) => sendResponse(res));
});
