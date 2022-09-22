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
    latest: "0.0.4",
    changes: "VPC, SNS & ECS indexing.",
    moreUrl: "https://cloudtempo.dev/changelog#0.0.4",
    createdAt: "2021-09-22T00:00:00.000Z",
  });
}
