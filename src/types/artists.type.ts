import { genresType } from "./genres.type";

export interface artistType {
    _id: string;
    followers:follower
    name:string;
    genres:genresType[]
    images:string
    popularity:number
}

type follower = {
    href: string;
    totle:number
}