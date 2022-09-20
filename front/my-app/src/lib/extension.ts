export const extensionId = () =>
  document
    ? document.querySelector("[aws-search-extensionid]")!.attributes[
        "aws-search-extensionid" as any
      ].value
    : "document-not-available";
