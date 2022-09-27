export const extensionId = () => {
  if (!document) {
    console.error("document-not-available");
    return "document-not-available";
  }

  const searchExtIdElement = document.querySelector("[aws-search-extensionid]");

  if (!searchExtIdElement) {
    console.error("searchExtIdElement-not-available");
    return "searchExtIdElement-not-available";
  }

  const attrs = searchExtIdElement.attributes["aws-search-extensionid" as any];

  if (!attrs) {
    console.error("attrs-not-available");
    return "attrs-not-available";
  }

  return attrs.value;
};
