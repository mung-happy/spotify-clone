import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
  res: NextResponse
) {
  const prisma = new PrismaClient();

  try {
    const artists = await prisma.tracks.findFirst({
      where: {
        slug: params.slug,
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
