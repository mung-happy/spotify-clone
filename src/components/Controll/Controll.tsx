"use client";

import {
  IoIosPlay,
  IoIosAddCircleOutline,
  IoIosRepeat,
  IoIosPause,
} from "react-icons/io";
import { LiaRandomSolid } from "react-icons/lia";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useRef } from "react";
import { pauseMusicCurrent, playMusicCurrent } from "@/redux/playMusic/slice";

export default function Controll() {
  const music = useSelector((state: RootState) => state.playMusic);
  const audioRefs = useRef<HTMLAudioElement | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (audioRefs.current && music.play) {
      audioRefs.current.play();
      return;
    }
    if (audioRefs.current && !music.play) {
      audioRefs.current.pause();
      return;
    }
  }, [music.play]);

  const handlePlay = () => {
    dispatch(playMusicCurrent());
  };

  const handlePause = () => {
    dispatch(pauseMusicCurrent());
  };
  return (
    <div className="col-span-full absolute bottom-0 left-0 right-0">
      <audio ref={audioRefs} src={music.track?.track_url}></audio>
      {/* <div className="flex justify-between items-center bg-gradient-to-r from-purple-700 to-blue-500 mt-2 text-white pt-3 pr-6 pb-2 pl-4">
        <div className="">
          <p className="font-bold text-sm">Xem trước Spotify</p>
          <span>
            Đăng ký để nghe không giới hạn các bài hát và podcast với quảng cáo
            không thường xuyên. Không cần thẻ tín dụng.
          </span>
        </div>
        <button
          type="button"
          className="rounded-full bg-white text-black px-8 py-2 font-bold p-[1px] hover:bg-[#] ml-4 cursor-pointer"
        >
          Đăng kí miễn phí
        </button>
      </div> */}
      <div
        id="MusicPlayer"
        v-if="audio"
        className="
            flex
            items-center
            h-20
            justify-between
            bg-[#181818]
            border-t
            border-t-[#272727]
        "
      >
        <div className="flex items-center w-1/4">
          <div className="flex items-center ml-4">
            <img
              className="rounded-t-sm shadow-2xl object-cover w-14 h-14"
              src={music.track?.thumbnail}
            />
            <div className="ml-4">
              <div className="text-[14px] text-white hover:underline cursor-pointer">
                {music.track?.name}
              </div>
              <div className="font-semibold text-[11px] text-base-text hover:underline hover:text-white cursor-pointer">
                {music.track?.slug}
              </div>
            </div>
          </div>
          <div className="text-icon-color text-xl px-3">
            <IoIosAddCircleOutline />
          </div>
        </div>

        <div className="max-w-[35%] mx-auto w-2/4">
          <div className="flex-col items-center justify-center">
            <div className="buttons flex items-center justify-center h-[30px]">
              <button className="mx-2 text-icon-color hover:text-white text-xl">
                <LiaRandomSolid />
              </button>
              <button className="mx-2 text-icon-color hover:text-white text-xl">
                <GiPreviousButton />
              </button>
              <button className="p-1 rounded-full mx-3 bg-white hover:scale-105 text-2xl">
                <IoIosPlay
                  className={music.play ? "hidden" : "block"}
                  onClick={handlePlay}
                />
                <IoIosPause
                  className={music.play ? "block" : "hidden"}
                  onClick={handlePause}
                />
              </button>
              <button className="mx-2 text-icon-color hover:text-white text-xl">
                <GiNextButton />
              </button>
              <button className="mx-2 text-icon-color hover:text-white text-2xl">
                <IoIosRepeat />
              </button>
            </div>

            <div className="flex items-center h-[25px]">
              <div
                v-if="isTrackTimeCurrent"
                className="text-base-text text-[12px] pr-2 pt-[11px]"
              >
                1:11
              </div>
              <div className="w-full relative mt-2 mb-3">
                <input
                  type="range"
                  className="absolute rounded-full my-2 w-full h-1 z-40 focus:outline-none "
                />
                {/* <div className="pointer-events-none mt-[6px] absolute h-[4px] z-10 inset-y-0 left-0 w-0 bg-green-500 bg-white" /> */}
                {/* <div className="absolute h-[4px] z-[-0] mt-[6px] inset-y-0 left-0 w-full bg-gray-500 rounded-full" /> */}
              </div>
              <div
                v-if="isTrackTimeTotal"
                className="text-base-text text-[12px] pl-2 pt-[11px]"
              >
                2:30
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center w-1/4 justify-end pr-10">
          {/* <MusicPlayerVolume /> */}
        </div>
      </div>
    </div>
  );
}
