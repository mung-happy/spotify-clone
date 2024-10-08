import { https } from "@/lib/configHttp";
import { trackType } from "@/types/track.type";

// Trong một trang hoặc component của bạn
export function getMusic(limit: number = 0) {
  return https.get<trackType[]>(`track?limit=${limit}`);
}
export function getMusicId(pid: string) {
  return https.get<trackType>("track/" + pid);
}
