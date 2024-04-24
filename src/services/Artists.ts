import https from "@/lib/configHttp";
import { artistType } from "@/types/artists.type";

export async function getArtist() {
  
      return https.get<artistType[]>("artist")
    
  }
    export async function getArtistId(pid:string) {
      return https.get<artistType>("artist/"+pid)
    }