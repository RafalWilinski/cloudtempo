import MiniSearch from "minisearch";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { Stream } from "stream";

const s3 = new S3Client({});
const miniSearch = new MiniSearch({
  fields: ["title", "name", "arn", "description"],
  storeFields: ["title", "name", "arn", "description", "awsService", "region"],
  idField: "name", // todo: change to arn,
  // tokenize: (str: string) => str.split(/(?:,|-_ )+/), //experiment
});

let isSearchInitialized = false;
let documents = s3.send(
  new GetObjectCommand({
    Bucket: process.env.DUMP_BUCKET!,
    Key: "index.json",
  })
);

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const query = event.queryStringParameters!["q"];
  if (!query) {
    return {
      statusCode: 400,
      body: "Missing query parameter 'q'",
    };
  }

  if (!isSearchInitialized) {
    const bodyContents = await streamToString((await documents).Body);

    miniSearch.addAll(JSON.parse(bodyContents));
    isSearchInitialized = true;
  }

  const results = miniSearch.search(query, {
    boost: { title: 2 },
  });

  console.log({ query, results });

  return {
    statusCode: 200,
    body: JSON.stringify({ results }),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      "Content-Type": "application/json",
    },
  };
};

const streamToString = (stream: Stream): Promise<string> =>
  new Promise((resolve, reject) => {
    const chunks: Uint8Array[] = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
