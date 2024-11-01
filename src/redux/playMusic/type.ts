import { TrackDetail } from "@/types/track.type";

export interface playMusicType {
  id: number;
  type: string;
  tracks: TrackDetail[];
  currentSongIndex: number;
  isPlay: boolean;
}
