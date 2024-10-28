import { TrackType } from "./track.type";

export interface ArtistType {
  id: number;
  name: string;
  thumbnail: string;
  banner: string;
  popularity: number | null;
  type: string;
  slug: string;
  duration: string;
}

export interface ArtistDetail extends ArtistType {
  tracks: TrackType[];
}
