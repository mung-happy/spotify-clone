import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const prisma = new PrismaClient();
  const limit = req.nextUrl.searchParams.get("limit");
  const artistsHot = req.nextUrl.searchParams.get("type");
  try {
    const artists = await prisma.tracks.findMany({
      take: limit ? parseInt(limit) : undefined,
      orderBy: {
        popularity: artistsHot === "hot" ? "desc" : "asc",
      },
      include: {
        artist: true,
      },
    });
    return Response.json({ data: artists });
  } catch (error) {
    console.log(error);
  }
}
