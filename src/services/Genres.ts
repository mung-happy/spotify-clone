import https from "@/lib/configHttp";
import { genresType } from "@/types/genres.type";

export function getGenres() {
  return https.get<genresType[]>("genres")
}
  export function getGenresById(pid:string) {
    return https.get<genresType>("genres/"+pid)
  }