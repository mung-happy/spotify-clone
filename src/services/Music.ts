import https from "@/lib/configHttp";
import { trackType } from "@/types/track.type";

// Trong một trang hoặc component của bạn
export function getMusic() {
   return https.get<trackType[]>("track")
  }
  export function getMusicId(pid:string) {
    return https.get<trackType>("track/"+pid)
  }
  