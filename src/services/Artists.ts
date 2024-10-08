import { https } from "@/lib/configHttp";
import { SpotifyArtist } from "@/types/artists.type";

export async function getArtist(): Promise<SpotifyArtist[]> {
  const artists = await fetch(`http://localhost:3000/api/artits`);
  const artistsData = await artists.json();
  return artistsData;
}
export async function getArtistId(pid: string) {
  return https.get("artist/" + pid);
}
