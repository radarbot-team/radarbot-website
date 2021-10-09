import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const prisma = new PrismaClient();
  const { guildId } : any = req.query;
  const screenshots = await prisma.screenshots.findMany({
    where: {
      guildId
    }
  })

  res.status(200).json(screenshots);
}