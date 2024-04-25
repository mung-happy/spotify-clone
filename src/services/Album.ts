import https from "@/lib/configHttp";
import { albumType } from "@/types/album.type";

export async function getAlbum(limit: number = 0) {
  return https.get<albumType[]>(`album?limit=${limit}`)
  }
    export async function getAlbumId(pid:string) {
      return https.get<albumType>(`album/${pid}`)
    }