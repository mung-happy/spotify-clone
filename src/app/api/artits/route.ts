import { ARTIST } from "@/constants";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const cookieStore = cookies();
  const token = cookieStore.get("spotify_token");
  const response = await fetch(
    `https://api.spotify.com/v1/artists?ids=${ARTIST}`,
    {
      headers: {
        Authorization: "Bearer " + token?.value,
      },
    }
  );
  const data = await response.json();

  return Response.json(data);
}
