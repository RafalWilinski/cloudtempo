import { get, keys } from "idb-keyval";
import { AES, enc } from "crypto-js";
import MiniSearch from "minisearch";
import { Document } from "../../src/document";
import { SECRET_CONST } from "./reindex";

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

export async function reinitializeMinisearch(
  allDocuments: Document[],
  accountId: string
) {
  if (minisearch) {
    minisearch.removeAll();
    minisearch = createMinisearch();
    minisearch.addAll(allDocuments);
  } else {
    await getOrInitializeMinisearch(accountId);
  }
}

export async function getOrInitializeMinisearch(accountId: string) {
  if (minisearch) {
    return minisearch;
  }

  const secretKey = `${SECRET_CONST}-${accountId}`;

  console.log("Minisearch not initialized, initializing...");

  const allKeys = await keys();
  const accountDocumentKeys = allKeys
    .filter((k) => k.toString().startsWith(`documents#${accountId}`))
    .sort();

  const documentsPerKeys = await Promise.all(
    accountDocumentKeys.map(async (k) => {
      const documentsEncrypted = await get(k);
      const documentsDecrypted = AES.decrypt(
        documentsEncrypted,
        secretKey
      ).toString(enc.Utf8);

      return JSON.parse(documentsDecrypted);
    })
  );

  const documentsFlattened = documentsPerKeys.flat();

  minisearch = createMinisearch();
  minisearch.addAll(documentsFlattened);

  return minisearch;
}
