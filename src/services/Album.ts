import https from "@/lib/configHttp";
import { albumType } from "@/types/album.type";

export async function getAlbum() {
  return https.get<albumType[]>(`album`)
  }
    export async function getAlbumId(pid:string) {
      return https.get<albumType>(`album/${pid}`)
    }