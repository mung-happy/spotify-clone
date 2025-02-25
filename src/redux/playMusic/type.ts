import { TrackDetail } from "@/types/track.type";

export interface playMusicType {
  id: number;
  type: string;
  shuffledPlaylist: TrackDetail[];
  tracks: TrackDetail[];
  currentSongIndex: number;
  isPlay: boolean;
  repeatMode: "all" | "one" | "none";
  shufflerMode: boolean;
}
