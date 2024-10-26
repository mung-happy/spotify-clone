import { https } from "@/lib/configHttp";
import { TrackType } from "@/types/track.type";

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

export async function getTracksBySlug(slug: string): Promise<TrackType> {
  const response = await https.get<{ data: TrackType }>(`tracks/${slug}`);
  return response.payload.data;
}
