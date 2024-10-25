import { createSlice, configureStore } from "@reduxjs/toolkit";
import { palyMusicType } from "./type";

const initialState: palyMusicType = {
  url: "",
  play: false,
};

const playSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    playMusic: (state, acton) => {
      state.url = acton.payload.url;
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
