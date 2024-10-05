"use server";

import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET_ID = process.env.CLIENT_SECRET_ID;

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const cookieStore = cookies();
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: CLIENT_ID ?? "",
      client_secret: CLIENT_SECRET_ID ?? "",
    }),
  });
  const data = await response.json();
  const { access_token, expires_in } = data;

  cookieStore.set("spotify_token", access_token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + expires_in * 1000),
  });
  console.log("Set cookie");
  return Response.json({ data });
  // res.status(200).json({ access_token, expires_in });
}
