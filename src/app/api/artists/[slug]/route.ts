import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
  res: NextResponse
) {
  const prisma = new PrismaClient();

  try {
    const artist = await prisma.artists.findFirst({
      where: {
        slug: params.slug,
      },
    });
    if (!artist) throw new Error("Artist not found");

    const tracks = await prisma.tracks.findMany({
      where: {
        artist_id: artist.id,
      },
    });
    return Response.json({ data: { artist, tracks } });
  } catch (error) {
    console.log(error);
  }
}
