import { https } from "@/lib/configHttp";
import { ArtistType } from "@/types/artists.type";
import { DetailData } from "@/types/ultits.type";

export async function getArtist(
  limit: number = 6,
  type: string = ""
): Promise<ArtistType[]> {
  const response = await https.get<{ data: ArtistType[] }>(
    `artists?limit=${limit}&type=${type}`
  );
  return response.payload.data;
}

export async function getArtistSlug(slug: string): Promise<DetailData> {
  const response = await https.get<DetailData>("artists/" + slug);
  return response.payload;
}
