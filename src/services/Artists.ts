import https from "@/lib/configHttp";
import { artistType } from "@/types/artists.type";

export async function getArtist(limit: number = 0) {
  
      return https.get<artistType[]>(`artist?limit=${limit}`)
    
  }
    export async function getArtistId(pid:string) {
      return https.get<artistType>("artist/"+pid)
    }