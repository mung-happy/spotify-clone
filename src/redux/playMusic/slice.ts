import { createSlice } from "@reduxjs/toolkit";
import { playMusicType } from "./type";

const initialState: playMusicType = {
  id: 0,
  tracks: [],
  type: "",
  currentSongIndex: 0,
  isPlay: false,
};

const playSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    playMusic: (state, action) => {
      state.tracks = action.payload.tracks;
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
      if (state.currentSongIndex < state.tracks.length - 1) {
        state.currentSongIndex += 1;
      } else {
        state.currentSongIndex = 0;
      }
    },
    previousSong: (state) => {
      if (state.currentSongIndex > 0) {
        state.currentSongIndex -= 1;
      } else {
        state.currentSongIndex = state.tracks.length - 1;
      }
    },
    shufflerSong: (state) => {
      if (state.tracks.length > 0) {
        const newArraySong = [...state.tracks];
        const currentSong = newArraySong.splice(state.currentSongIndex, 1);

        const shuffledSong = newArraySong.sort(() => Math.random() - 0.5);
        shuffledSong.unshift(currentSong[0]);
        state.tracks = shuffledSong;
        state.currentSongIndex = 0;
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
} = playSlice.actions;
export default playSlice.reducer;
