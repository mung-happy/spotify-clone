import { createSlice } from "@reduxjs/toolkit";
import { playMusicType } from "./type";

const initialState: playMusicType = {
  id: 0,
  tracks: [],
  shuffledPlaylist: [],
  type: "",
  currentSongIndex: 0,
  isPlay: false,
  repeatMode: "none",
  shufflerMode: false,
};

const playSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    playMusic: (state, action) => {
      if (action.payload.currentSongIndex) {
        state.currentSongIndex = action.payload.currentSongIndex;
      }
      state.tracks = action.payload.tracks;
      state.shuffledPlaylist = action.payload.tracks;
      state.id = action.payload.id;
      state.type = action.payload.type;
      state.isPlay = true;
    },
    playMusicCurrent: (state) => {
      state.isPlay = true;
    },
    pauseMusicCurrent: (state) => {
      state.isPlay = false;
    },
    nextSong: (state) => {
      if (state.currentSongIndex < state.shuffledPlaylist.length - 1) {
        state.currentSongIndex += 1;
      } else {
        state.currentSongIndex = 0;
      }
      if (!state.isPlay) {
        state.isPlay = true;
      }
    },
    previousSong: (state) => {
      if (state.currentSongIndex > 0) {
        state.currentSongIndex -= 1;
      } else {
        state.currentSongIndex = 0;
      }
      if (!state.isPlay) {
        state.isPlay = true;
      }
    },
    shufflerSong: (state) => {
      if (!state.shufflerMode) {
        const newArraySong = [...state.shuffledPlaylist];
        const currentSong = newArraySong.splice(state.currentSongIndex, 1);

        const shuffledSong = newArraySong.sort(() => Math.random() - 0.5);
        shuffledSong.unshift(currentSong[0]);
        state.shuffledPlaylist = shuffledSong;
        state.currentSongIndex = 0;
        state.shufflerMode = true;
      } else {
        const findTrackCurrent = state.tracks.findIndex((item) => {
          const track = state.shuffledPlaylist[state.currentSongIndex];
          return track.id === item.id;
        });
        const newArraySong = [...state.tracks];
        state.shuffledPlaylist = newArraySong;
        state.currentSongIndex = findTrackCurrent;
        state.shufflerMode = false;
      }
    },
    toggleRepeat: (state) => {
      if (state.repeatMode === "none") {
        state.repeatMode = "all";
      } else if (state.repeatMode === "all") {
        state.repeatMode = "one";
      } else {
        state.repeatMode = "none";
      }
    },
  },
});

export const {
  playMusic,
  playMusicCurrent,
  pauseMusicCurrent,
  nextSong,
  previousSong,
  shufflerSong,
  toggleRepeat,
} = playSlice.actions;
export default playSlice.reducer;
