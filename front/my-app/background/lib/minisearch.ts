import { get } from "idb-keyval";
import MiniSearch from "minisearch";
import { Document } from "../../src/document";

const CUSTOM_SPACE_OR_PUNCT = /[\n\r -_]+/u;
let minisearch: MiniSearch | undefined;

export function createMinisearch() {
  return new MiniSearch({
    fields: ["name"],
    storeFields: ["name", "arn", "awsService", "region"],
    idField: "arn",
    searchOptions: {
      boost: { awsService: 2 },
      fuzzy: 0.3,
      prefix: true,
    },
    tokenize: (text: string) => [
      ...text
        .split(CUSTOM_SPACE_OR_PUNCT)
        .map((t) => t.replace(/([a-z])([A-Z])/g, "$1 $2"))
        .map((s) => s.toLowerCase()),
    ],
  });
}

export async function reinitializeMinisearch(allDocuments: Document[]) {
  if (minisearch) {
    minisearch.removeAll();
    minisearch = createMinisearch();
    minisearch.addAll(allDocuments);
  } else {
    await getOrInitializeMinisearch();
  }
}

export async function getOrInitializeMinisearch() {
  if (minisearch) {
    return minisearch;
  }

  console.log("Minisearch not initialized, initializing...");

  const documents = JSON.parse((await get("documents")) || "{}");

  minisearch = createMinisearch();
  minisearch.addAll(documents);

  return minisearch;
}
