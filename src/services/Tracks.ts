import { https } from "@/lib/configHttp";
import { TrackDetail, TrackType } from "@/types/track.type";
import { DetailData } from "@/types/ultits.type";

// Trong một trang hoặc component của bạn
export async function getTracks(
  limit: number | string = "",
  type: string = ""
): Promise<TrackType[]> {
  const response = await https.get<{ data: TrackType[] }>(
    `tracks?limit=${limit}&type=${type}`
  );
  return response.payload.data;
}

export async function getTracksBySlug(slug: string): Promise<DetailData> {
  const response = await https.get<DetailData>(`tracks/${slug}`);
  return response.payload;
}
