import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
  res: NextResponse
) {
  const prisma = new PrismaClient();

  try {
    const result = await prisma.tracks.findFirst({
      where: {
        slug: params.slug,
      },
      include: {
        artist: true,
      },
    });
    const tracks = [result];
    const data = { ...result, artist: undefined };

    return Response.json({ detail: data, tracks });
  } catch (error) {
    console.log(error);
  }
}
