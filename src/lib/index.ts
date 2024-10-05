import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET_ID = process.env.CLIENT_SECRET_ID;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
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
    const { access_token, expires_in } = data.data;

    const expirationTime = new Date(Date.now() + expires_in * 1000);

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("spotify_token", access_token, {
        expires: expirationTime,
      })
    );

    res.status(200).json({ access_token, expires_in });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch access token" });
  }
}
