import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    latest: "0.0.4",
    changes: "VPC, SNS & ECS indexing.",
    moreUrl: "https://cloudtempo.dev/changelog#0.0.4",
    createdAt: "2021-09-22T00:00:00.000Z",
  });
}
