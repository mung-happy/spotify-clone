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
import { useCallback, useEffect, useRef, useState } from "react";
import {
  nextSong,
  pauseMusicCurrent,
  playMusicCurrent,
  previousSong,
  shufflerSong,
} from "@/redux/playMusic/slice";
import { formatTime } from "@/lib/utils";

export default function Controll() {
  const [isDragging, setIsDragging] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const music = useSelector((state: RootState) => state.playMusic);
  const audioRefs = useRef<HTMLAudioElement | null>(null);
  const dispatch = useDispatch();

  const currentSong = music.tracks[music.currentSongIndex];

  useEffect(() => {
    if (audioRefs.current && music.isPlay) {
      audioRefs.current.play();
      return;
    }
    if (audioRefs.current && !music.isPlay) {
      audioRefs.current.pause();
      return;
    }
  }, [music.isPlay, currentSong?.track_url]);

  useEffect(() => {
    const audio = audioRefs.current;
    const handleLoadedMetadata = () => {
      if (audio) {
        setDuration(audio.duration);
      }
    };
    const handleTimeUpdate = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
      }
    };

    // Gán sự kiện
    if (audio) {
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("timeupdate", handleTimeUpdate);
    }

    // Xóa sự kiện khi component bị hủy
    return () => {
      if (audio) {
        audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  useEffect(() => {
    if (currentTime === duration && music.tracks.length > 1) {
      dispatch(nextSong());
      return;
    }
    if (currentTime === duration) {
      dispatch(pauseMusicCurrent());
      return;
    }
  }, [currentTime]);

  const handlePlay = () => {
    dispatch(playMusicCurrent());
  };

  const handlePause = () => {
    dispatch(pauseMusicCurrent());
  };

  const handleSeekStart = () => {
    setIsDragging(true);
  };

  const handleSeeking = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
  };

  const handleSeekEnd = useCallback(() => {
    if (isDragging && audioRefs.current) {
      audioRefs.current.currentTime = currentTime;
      setIsDragging(false);
    }
  }, [currentTime, isDragging]);

  const handleNextSong = () => {
    dispatch(nextSong());
  };
  const handlePreviousSong = () => {
    dispatch(previousSong());
  };

  // const handleShuffler = () => {
  //   dispatch(shufflerSong());
  // };

  return (
    <div className="col-span-full absolute bottom-0 left-0 right-0">
      <audio ref={audioRefs} src={currentSong?.track_url}></audio>
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
              src={currentSong?.thumbnail}
            />
            <div className="ml-4">
              <div className="text-[14px] text-white hover:underline cursor-pointer">
                {currentSong?.name}
              </div>
              <div className="font-semibold text-[11px] text-base-text hover:underline hover:text-white cursor-pointer">
                {currentSong?.slug}
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
              {/* <button
                className="mx-2 text-icon-color hover:text-white text-xl"
                onClick={handleShuffler}
              >
                <LiaRandomSolid />
              </button> */}
              <button
                onClick={handlePreviousSong}
                className="mx-2 text-icon-color hover:text-white text-xl"
              >
                <GiPreviousButton />
              </button>
              <button className="p-1 rounded-full mx-3 bg-white hover:scale-105 text-2xl">
                <IoIosPlay
                  className={music.isPlay ? "hidden" : "block"}
                  onClick={handlePlay}
                />
                <IoIosPause
                  className={music.isPlay ? "block" : "hidden"}
                  onClick={handlePause}
                />
              </button>
              <button
                onClick={handleNextSong}
                className="mx-2 text-icon-color hover:text-white text-xl"
              >
                <GiNextButton />
              </button>
              {/* <button className="mx-2 text-icon-color hover:text-white text-2xl">
                <IoIosRepeat />
              </button> */}
            </div>

            <div className="flex items-center h-[25px]">
              <div
                v-if="isTrackTimeCurrent"
                className="text-base-text text-[12px] pr-2 pt-[11px]"
              >
                {formatTime(currentTime)}
              </div>
              <div className="w-full relative mt-2 mb-3">
                <input
                  onChange={handleSeeking}
                  type="range"
                  value={currentTime}
                  min={0}
                  max={duration}
                  className="absolute rounded-full my-2 w-full h-1 z-40 focus:outline-none"
                  onMouseDown={handleSeekStart}
                  onMouseUp={handleSeekEnd}
                  onTouchStart={handleSeekStart}
                  onTouchEnd={handleSeekEnd}
                />
                {/* <div className="pointer-events-none mt-[6px] absolute h-[4px] z-10 inset-y-0 left-0 w-0 bg-green-500 bg-white" /> */}
                {/* <div className="absolute h-[4px] z-[-0] mt-[6px] inset-y-0 left-0 w-full bg-gray-500 rounded-full" /> */}
              </div>
              <div
                v-if="isTrackTimeTotal"
                className="text-base-text text-[12px] pl-2 pt-[11px]"
              >
                {formatTime(duration)}
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
