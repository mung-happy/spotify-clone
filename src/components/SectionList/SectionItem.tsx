"use client";

import Link from "next/link";
import PlayPauseMusic from "../PlayPauseButton/PlayPauseMusic";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  pauseMusicCurrent,
  playMusic,
  playMusicCurrent,
} from "@/redux/playMusic/slice";
import { DetailData } from "@/types/ultits.type";
type Props = {
  rounded_img?: boolean;
  data: DetailData;
};

export default function SectionItem({ rounded_img = false, data }: Props) {
  const music = useSelector((state: RootState) => state.playMusic);
  const dispatch = useDispatch();

  const handlePauseMusic = () => {
    dispatch(pauseMusicCurrent());
  };

  const handlePlay = () => {
    dispatch(playMusicCurrent());
  };

  const handlePlayList = () => {
    if (music.isPlay && music.id === data?.detail.id) {
      handlePauseMusic();
    } else if (!music.isPlay && music.id === data?.detail.id) {
      handlePlay();
    } else {
      dispatch(
        playMusic({
          tracks: data?.tracks ?? [],
          id: data?.detail.id,
          type: data?.detail.type,
        })
      );
    }
  };
  return (
    <div className=" gap-2 relative group">
      <Link href={`/${data.detail.type}s/${data.detail.slug}`}>
        <div
          key={data.detail.slug}
          className="mt-3 hover:bg-[#252525] cursor-pointer w-max p-2 rounded-lg"
        >
          <div>
            <img
              className={`${
                rounded_img ? "rounded-full" : "rounded-md"
              } w-[200px] h-[200px] object-cover`}
              src={data.detail.thumbnail}
              alt=""
            />
          </div>
          <div className="text-white pt-4 font-semibold text-[17px] text-nowrap text-ellipsis truncate text-container w-48 overflow-hidden whitespace-nowrap">
            {data.detail.name}
          </div>
          <div className="text-gray-400 pt-1 text-[14px] capitalize">
            {data.detail.type}
          </div>
          {/* <div className="text-gray-400 pt-1 pb-3 text-[14px]">
            {data.artists?.name}
          </div> */}
        </div>
      </Link>
      <div
        className={`absolute z-50 right-12 ${
          music.type === data?.detail.type &&
          music.isPlay &&
          music.id === data?.detail.id
            ? "opacity-100 bottom-1/4"
            : "opacity-0 bottom-[20%] group-hover:bottom-1/4 group-hover:opacity-100"
        } shadow-xl duration-300`}
      >
        <div onClick={handlePlayList} className="w-12 h-12 cursor-pointer">
          <PlayPauseMusic
            isPlay={
              music.type === data?.detail.type &&
              music.isPlay &&
              music.id === data?.detail.id
                ? true
                : false
            }
          />
        </div>
      </div>
    </div>
  );
}
