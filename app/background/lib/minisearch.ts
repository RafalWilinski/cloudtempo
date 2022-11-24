import { get, keys, set } from "idb-keyval";
import { AES, enc } from "crypto-js";
import MiniSearch from "minisearch";
import { Document } from "../../src/document";
import { SECRET_CONST } from "./reindex";
import { servicesData } from "./awsServicesData";
import queryParser from "search-query-parser";
import { Tag } from "aws-sdk/clients/cloudformation";

const CUSTOM_SPACE_OR_PUNCT = /[\n\r -_]+/u;
let minisearch: MiniSearch | undefined;

export function createMinisearch(): MiniSearch {
  const search = new MiniSearch({
    fields: ["name", "description", "awsService", "keywords"],
    storeFields: [
      "name",
      "arn",
      "awsService",
      "region",
      "description",
      "url",
      "subtext",
      "tags",
      "isFavourite",
    ],
    idField: "arn",
    searchOptions: {
      processTerm: (term) => term.toLowerCase(),
      boost: { awsService: 3 },
      fuzzy: 0.3,
      prefix: true,
    },
    tokenize: (text: string) => [
      ...text
        .split(CUSTOM_SPACE_OR_PUNCT)
        // Split camelCase into two lowercased words and keep the original word lowercased
        .map(
          (t) => `${t.toLowerCase()} ${t.replace(/([a-z])([A-Z])/g, "$1 $2")}`
        )
        .map((s) => s.toLowerCase()),
    ],
  });

  search.addAll(
    servicesData.services
      .filter(
        (s) => (s.abbreviation || s.label) && s.description && !s.unlisted
      )
      .map((s) => {
        return {
          name: s.label,
          keywords: s.keywords || "",
          arn: s.abbreviation?.toLowerCase() || s.label?.toLowerCase(),
          awsService: "service",
          description: s.description,
          url: s.url,
        };
      })
  );

  return search;
}

export async function reinitializeMinisearch(
  allDocuments: Document[],
  accountId: string
) {
  if (minisearch) {
    minisearch.removeAll();
    minisearch = createMinisearch();
    minisearch.addAll(
      await enhanceWithFavouritesTrait(accountId, allDocuments)
    );
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
  const documentsWithTag = await enhanceWithFavouritesTrait(
    accountId,
    documentsFlattened
  );

  minisearch = createMinisearch();
  minisearch.addAll(documentsWithTag);

  return minisearch;
}

async function getDocumentsByRegionOrService(
  accountId: string,
  region?: string,
  service?: string,
  tagValue?: string
) {
  const secretKey = `${SECRET_CONST}-${accountId}`;
  const allKeys = await keys();

  const accountDocumentKeys = allKeys
    .filter((k) => k.toString().startsWith(`documents#${accountId}`))
    .sort();

  const regionDocumentKeys = region
    ? accountDocumentKeys.filter((k) => k.toString().includes(`#${region}`))
    : accountDocumentKeys;

  const serviceDocumentKeys = service
    ? regionDocumentKeys.filter((k) => k.toString().includes(`#${service}`))
    : regionDocumentKeys;

  const documentsPerKeys = await Promise.all(
    serviceDocumentKeys.map(async (k) => {
      const documentsEncrypted = await get(k);
      const documentsDecrypted = AES.decrypt(
        documentsEncrypted,
        secretKey
      ).toString(enc.Utf8);

      return JSON.parse(documentsDecrypted);
    })
  );

  const documentsFlattened = documentsPerKeys.flat();

  const documentsWithTag = tagValue
    ? documentsFlattened.filter((d) => {
        return d.tags?.some((t: Tag) => t.Value.includes(tagValue));
      })
    : documentsFlattened;

  return await enhanceWithFavouritesTrait(accountId, documentsWithTag);
}

export async function search(
  accountId: string,
  term: string,
  servicesCountLimit = 10
) {
  if (term.startsWith("$") || term.startsWith(">")) {
    return query(accountId, term);
  }

  const results = (await getOrInitializeMinisearch(accountId)).search(term);

  const servicesResults = results
    .filter((s) => s.awsService === "service")
    .slice(0, servicesCountLimit);

  const resourcesResults = results.filter((s) => s.awsService !== "service");

  return [...resourcesResults, ...servicesResults];
}

export async function query(accountId: string, term: string) {
  const query = term.split(/[\$\>]/).pop()!;

  if (!query) {
    return [];
  }

  const params = queryParser.parse(query.trim(), {
    keywords: ["service", "svc", "s", "region", "reg", "r", "tag", "tags", "t"],
  });

  if (typeof params !== "object") {
    return [];
  }

  const service = params.service || params.svc || params.s;
  const region = params.region || params.reg || params.r;
  const tag = params.tag || params.tags || params.t;
  const text = params.text;

  console.log(query, params, service, region, text, tag);

  const documents = await getDocumentsByRegionOrService(
    accountId,
    region,
    service,
    tag
  );

  if (!text) {
    return documents;
  }

  const textLowercased = ((text as string) ?? "").toLowerCase();

  return documents.filter(
    (d) =>
      (d.name ?? "").toLowerCase().includes(textLowercased) ||
      (d.description ?? "").toLowerCase().includes(textLowercased) ||
      (d.arn ?? "").toLowerCase().includes(textLowercased)
  );
}

export async function markAsFavourite(
  accountId: string,
  document: Document,
  isFavourite = true
) {
  const minisearch = await getOrInitializeMinisearch(accountId);
  minisearch.remove(document);
  minisearch.add({
    ...document,
    isFavourite,
  });

  const favourites = (await get(`favourites#${accountId}`)) || [];
  const isArnInFavourites = favourites?.includes(document.arn);

  if (isArnInFavourites) {
    const newFavourites = favourites.filter((f: string) => f !== document.arn);
    await set(`favourites#${accountId}`, newFavourites);
    console.log({ newFavourites });
  } else {
    const newFavourites = [...favourites, document.arn];
    await set(`favourites#${accountId}`, newFavourites);
    console.log({ newFavourites });
  }
}

async function enhanceWithFavouritesTrait(
  accountId: string,
  documents: Document[]
) {
  const favourites = (await get(`favourites#${accountId}`)) || [];

  return documents.map((d) => {
    return {
      ...d,
      isFavourite: favourites.includes(d.arn),
    };
  });
}
