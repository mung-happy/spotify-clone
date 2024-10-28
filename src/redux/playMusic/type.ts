import { TrackType } from "@/types/track.type";

export interface playMusicType {
  id: number;
  type: string;
  tracks: TrackType[];
  currentSongIndex: number;
  isPlay: boolean;
}
