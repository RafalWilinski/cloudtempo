import { extensionId } from "./extension";

export function extractCSRFToken() {
  if (
    !(
      location.href.includes("dynamodbv2/home") ||
      location.href.includes("ecs/v2")
    )
  ) {
    return;
  }

  const htmlContent = document.documentElement.innerHTML;

  const splitStartToken = "csrfToken&quot;:&quot;";
  const splitEndToken = "&quot;";

  const csrfToken = htmlContent
    .split(splitStartToken)[1]
    .split(splitEndToken)[0];

  const type = location.href.includes("dynamodbv2/home")
    ? "ddbCsrfToken"
    : "ecsCsrfToken";

  browser.runtime.sendMessage(extensionId(), {
    type,
    csrfToken,
  });

  console.log({ type, csrfToken });

  return csrfToken;
}
