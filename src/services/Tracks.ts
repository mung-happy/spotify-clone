import { https } from "@/lib/configHttp";
import { TrackDetail, TrackType } from "@/types/track.type";
import { DetailData } from "@/types/ultits.type";

// Trong một trang hoặc component của bạn
export async function getTracks(
  limit: number | string = "",
  type: string = ""
): Promise<DetailData[]> {
  const response = await https.get<DetailData[]>(
    `tracks?limit=${limit}&type=${type}`
  );
  return response.payload;
}

export async function getTracksBySlug(slug: string): Promise<DetailData> {
  const response = await https.get<DetailData>(`tracks/${slug}`);
  return response.payload;
}
