import { ArtistType } from "./artists.type";
import { TrackDetail, TrackType } from "./track.type";

export interface DetailData {
  detail: ArtistType | TrackType;
  tracks: TrackDetail[];
}
