import { artistType } from "./artists.type";

export interface componentType{
    name: string;
    artists?:artistType
    image:string;
    type: string;
    slug:string;
}