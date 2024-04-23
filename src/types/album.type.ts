import { artistType } from "./artists.type"
import { trackType } from "./track.type"

export interface albumType {
    _id: string
    total_tracks:number
    tracks:trackType[]
    image:string
    name:string
    artists:artistType,
    color_bg?:string
}