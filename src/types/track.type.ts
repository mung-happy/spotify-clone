import { ArtistType } from "./artists.type";

export interface trackType {
  id: number;
  thumbnail: string;
  name: string;
  popularity: number | null;
  color_bg: string;
  type: string;
  slug: string;
  track_url: string;
}

export interface TrackDetail extends trackType {
  artist: ArtistType;
}
