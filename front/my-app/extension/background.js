var htmlBody = ` <div id="app"></div>
<script type="module" src="/index.89dadfae.js"></script>
`;

document.body.insertAdjacentHTML("beforeend", htmlBody);

let scripts = ["dist/index.89dadfae.js"];

scripts.forEach((file) => {
  var s = document.createElement("script");
  s.src = chrome.runtime.getURL(file);
  (document.head || document.documentElement).appendChild(s);
});

console.log("Injected!");
