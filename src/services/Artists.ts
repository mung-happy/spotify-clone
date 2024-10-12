import { https } from "@/lib/configHttp";
import { ArtistType } from "@/types/artists.type";

export async function getArtist(
  limit: number = 6,
  type: string = ""
): Promise<ArtistType[]> {
  const response = await https.get<{ data: ArtistType[] }>(
    `artists?limit=${limit}&type=${type}`
  );
  return response.payload.data;
}

export async function getArtistId(pid: string) {
  return https.get("artist/" + pid);
}
