// pages/api/users/index.ts

import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany({
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
      });

      return res.status(200).json(users);
    } catch (error) {
      return res.status(422).json(error);
    }
  }

  res.end();
};