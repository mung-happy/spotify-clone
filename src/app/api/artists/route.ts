import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const prisma = new PrismaClient();
  const limit = req.nextUrl.searchParams.get("limit");
  const artistsHot = req.nextUrl.searchParams.get("type");
  try {
    const artists = await prisma.artists.findMany({
      take: parseInt(limit || "5"),
      orderBy: {
        popularity: artistsHot === "hot" ? "desc" : "asc",
      },
    });
    return Response.json({ data: artists });
  } catch (error) {
    console.log(error);
  }
}
