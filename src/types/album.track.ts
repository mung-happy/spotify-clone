import { artistType } from "./artists.type";

export interface componentType{
    _id: string;
    name: string;
    artists:artistType
    image:string;
    type: string;
}