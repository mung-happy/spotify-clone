import { artistType } from "./artists.type"
import { genresType } from "./genres.type"

export interface trackType {
    _id:string
    artists:artistType
    genres:genresType[]
    spotify:string
    image:string
    name:string
    popularity:number
    color_bg?:string
    type:string
    slug:string
}

