import { https } from "@/lib/configHttp";
import { trackType } from "@/types/track.type";

// Trong một trang hoặc component của bạn
export async function getTracks(
  limit: number = 6,
  type: string = ""
): Promise<trackType[]> {
  const response = await https.get<{ data: trackType[] }>(
    `tracks?limit=${limit}&type=${type}`
  );
  return response.payload.data;
}

export function getMusicId(pid: string) {
  return https.get<trackType>("track/" + pid);
}
