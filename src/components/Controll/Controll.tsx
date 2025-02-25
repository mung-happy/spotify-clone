"use client";

import { IoIosPlay, IoIosPause } from "react-icons/io";
import { PiRepeatFill, PiRepeatOnceFill } from "react-icons/pi";
import { LiaRandomSolid } from "react-icons/lia";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import React, { useEffect, useRef, useState } from "react";
import {
  nextSong,
  pauseMusicCurrent,
  playMusicCurrent,
  previousSong,
  shufflerSong,
  toggleRepeat,
} from "@/redux/playMusic/slice";
import { formatTime } from "@/lib/utils";

export default function Controll() {
  const [isDragging, setIsDragging] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const music = useSelector((state: RootState) => state.playMusic);
  const audioRefs = useRef<HTMLAudioElement | null>(null);
  const dispatch = useDispatch();

  const currentSong = music.shuffledPlaylist[music.currentSongIndex];

  useEffect(() => {
    if (audioRefs.current && music.isPlay) {
      audioRefs.current.play();
      document.title = `${currentSong.name} - ${currentSong.artist.name}`;
      return;
    }
    if (audioRefs.current && !music.isPlay) {
      audioRefs.current.pause();
      return;
    }
  }, [music.isPlay, currentSong]);

  useEffect(() => {
    const audio = audioRefs.current;
    const handleLoadedMetadata = () => {
      if (audio) {
        setDuration(audio.duration);
      }
    };
    const handleTimeUpdate = () => {
      if (audio && !isDragging) {
        setCurrentTime(audio.currentTime);
      }
    };

    if (audio) {
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (audio) {
        audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [isDragging]);

  useEffect(() => {
    if (!duration || currentTime !== duration) return;

    if (music.repeatMode === "one" && audioRefs.current) {
      audioRefs.current.play();
      return;
    }

    if (
      music.shuffledPlaylist.length > 1 &&
      (music.currentSongIndex < music.shuffledPlaylist.length - 1 ||
        music.repeatMode === "all")
    ) {
      dispatch(nextSong());
    } else {
      dispatch(pauseMusicCurrent());
    }
  }, [duration, currentTime]);

  const handlePlay = () => {
    if (music.isPlay) {
      dispatch(pauseMusicCurrent());
    } else {
      dispatch(playMusicCurrent());
    }
  };

  const handleSeekStart = () => {
    setIsDragging(true);
  };

  const handleSeeking = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
  };

  const handleSeekEnd = () => {
    if (audioRefs.current) {
      audioRefs.current.currentTime = currentTime;
    }
    setIsDragging(false);
  };

  const handleNextSong = () => {
    dispatch(nextSong());
  };
  const handlePreviousSong = () => {
    dispatch(previousSong());
  };

  const handleShuffler = () => {
    dispatch(shufflerSong());
  };

  const handleRepeat = () => {
    dispatch(toggleRepeat());
  };

  return (
    <div className="col-span-full absolute bottom-0 left-0 right-0 z-50">
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
              src={currentSong?.thumbnail || "./music-note.jpg"}
            />
            <div className="ml-4">
              <div className="text-[14px] text-white hover:underline cursor-pointer">
                {currentSong?.name}
              </div>
              <div className="font-semibold text-[11px] text-base-text hover:underline hover:text-white cursor-pointer">
                {currentSong?.artist.name}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[35%] mx-auto w-2/4">
          <div className="flex-col items-center justify-center">
            <div className="buttons flex items-center justify-center h-[30px]">
              <button
                className={`mx-2 ${
                  music.shufflerMode ? "text-green-500" : "text-icon-color"
                } text-xl ${
                  music.shuffledPlaylist.length > 1 &&
                  !music.shufflerMode &&
                  "hover:text-white"
                }`}
                onClick={handleShuffler}
                disabled={!currentSong || music.shuffledPlaylist.length == 1}
              >
                <LiaRandomSolid />
              </button>
              <button
                onClick={handlePreviousSong}
                className={`mx-2 text-icon-color text-xl ${
                  music.shuffledPlaylist.length > 1 && "hover:text-white"
                }`}
                disabled={!currentSong || music.shuffledPlaylist.length == 1}
              >
                <GiPreviousButton />
              </button>
              <button
                onClick={handlePlay}
                className={`p-1 rounded-full mx-3 bg-white ${
                  currentSong && "hover:scale-105"
                } text-2xl`}
                disabled={!currentSong}
              >
                {music.isPlay ? <IoIosPause /> : <IoIosPlay />}
              </button>
              <button
                onClick={handleNextSong}
                className={`mx-2 text-icon-color text-xl ${
                  music.shuffledPlaylist.length > 1 && "hover:text-white"
                }`}
                disabled={!currentSong || music.shuffledPlaylist.length == 1}
              >
                <GiNextButton />
              </button>
              <button
                onClick={handleRepeat}
                className={`mx-2 text-xl ${
                  music.repeatMode === "none" &&
                  "hover:text-white text-icon-color "
                } ${music.repeatMode !== "none" && "text-green-500"}`}
              >
                {music.repeatMode === "one" ? (
                  <PiRepeatOnceFill />
                ) : (
                  <PiRepeatFill />
                )}
              </button>
            </div>

            <div className="flex items-center h-[25px]">
              <div
                v-if="isTrackTimeCurrent"
                className="text-base-text text-[12px] pr-2 pt-[11px]"
              >
                {formatTime(currentTime)}
              </div>
              <div className="w-full relative mb-3">
                <input
                  onChange={handleSeeking}
                  type="range"
                  value={currentTime}
                  min={0}
                  max={duration}
                  className="absolute rounded-full my-2 w-full h-2 z-40 focus:outline-none"
                  onMouseDown={handleSeekStart}
                  onMouseUp={handleSeekEnd}
                />
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
