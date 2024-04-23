import { albumTye } from "./album.type";
import { genresType } from "./genres.type";
import { trackType } from "./track.type";

export interface artistType {
    _id: string;
    followers:follower
    name:string;
    genres:genresType[]
    images:string
    popularity:number
    banner?:string,
    tracks?:trackType[]
    album:albumTye[]
}

type follower = {
    href: string
    total:number
}