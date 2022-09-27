import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);

  res.status(200).json({
    latest: "0.1.0",
    changes: "Indexing tags, ARN-to-URL and more",
    moreUrl: "https://cloudtempo.dev/changelog#0.1.0",
    createdAt: "2021-09-27T00:00:00.000Z",
  });
}
