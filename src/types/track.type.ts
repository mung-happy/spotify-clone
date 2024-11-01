import { ArtistType } from "./artists.type";

export interface TrackType {
  id: number;
  thumbnail: string;
  name: string;
  popularity: number | null;
  color_bg: string;
  type: string;
  slug: string;
  track_url: string;
  play_nummber: number;
  duration: string;
}

export interface TrackDetail extends TrackType {
  artist: ArtistType;
}
