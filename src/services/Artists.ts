import { https } from "@/lib/configHttp";
import { ArtistType } from "@/types/artists.type";
import { trackType } from "@/types/track.type";

export async function getArtist(
  limit: number = 6,
  type: string = ""
): Promise<ArtistType[]> {
  const response = await https.get<{ data: ArtistType[] }>(
    `artists?limit=${limit}&type=${type}`
  );
  return response.payload.data;
}

export async function getArtistId(
  slug: string
): Promise<{ artist: ArtistType; tracks: trackType[] }> {
  const response = await https.get<{
    data: { artist: ArtistType; tracks: trackType[] };
  }>("artists/" + slug);
  return response.payload.data;
}
