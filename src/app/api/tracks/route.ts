import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const prisma = new PrismaClient();
  const limit = req.nextUrl.searchParams.get("limit");
  const artistsHot = req.nextUrl.searchParams.get("type");
  try {
    const result = await prisma.tracks.findMany({
      take: limit ? parseInt(limit) : undefined,
      orderBy: {
        popularity: artistsHot === "hot" ? "desc" : "asc",
      },
      include: {
        artist: true,
      },
    });

    const data = result.map((item) => {
      const tracks = [item];
      const detail = { ...item, artist: undefined };
      return { detail, tracks };
    });

    return Response.json(data);
  } catch (error) {
    console.log(error);
  }
}
