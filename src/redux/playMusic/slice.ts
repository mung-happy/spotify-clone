import { createSlice } from "@reduxjs/toolkit";
import { playMusicType } from "./type";

const initialState: playMusicType = {
  track: null,
  play: false,
};

const playSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    playMusic: (state, action) => {
      state.track = action.payload.track;
      state.play = true;
    },
    playMusicCurrent: (state) => {
      state.play = true;
    },
    pauseMusicCurrent: (state) => {
      state.play = false;
    },
  },
});

export const { playMusic, playMusicCurrent, pauseMusicCurrent } =
  playSlice.actions;
export default playSlice.reducer;
