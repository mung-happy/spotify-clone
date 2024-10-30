import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const prisma = new PrismaClient();
  const limit = req.nextUrl.searchParams.get("limit");
  const artistsHot = req.nextUrl.searchParams.get("type");
  try {
    const result = await prisma.artists.findMany({
      take: limit ? parseInt(limit) : undefined,
      orderBy: {
        popularity: artistsHot === "hot" ? "desc" : "asc",
      },
      include: {
        track: true,
      },
    });

    const data = result.map((item) => {
      const tracks = item?.track ?? [];
      const detail = { ...item, track: undefined };
      return { detail, tracks };
    });

    return Response.json(data);
  } catch (error) {
    console.log(error);
  }
}
