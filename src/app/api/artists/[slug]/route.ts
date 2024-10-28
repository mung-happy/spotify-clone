import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
  res: NextResponse
) {
  const prisma = new PrismaClient();

  try {
    const result = await prisma.artists.findFirst({
      where: {
        slug: params.slug,
      },
      include: {
        track: {
          include: {
            artist: true,
          },
        },
      },
    });
    const tracks = result?.track ?? [];
    const data = { ...result, track: undefined };

    return Response.json({ detail: data, tracks });
  } catch (error) {
    console.log(error);
  }
}
