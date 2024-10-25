import { configureStore } from "@reduxjs/toolkit";
import playMusicReduce from "./playMusic/slice";

export const store = configureStore({
  reducer: {
    playMusic: playMusicReduce,
  },
});
