"use client";

import PlayPauseMusic from "@/components/PlayPauseButton/PlayPauseMusic";
import { IoIosPause } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { IoTimeOutline, IoPlaySharp } from "react-icons/io5";
import { PiSealCheckFill } from "react-icons/pi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  pauseMusicCurrent,
  playMusic,
  playMusicCurrent,
} from "@/redux/playMusic/slice";
import { RootState } from "@/redux/store";
import { TrackType } from "@/types/track.type";
import { DetailData } from "@/types/ultits.type";
import { formatNumber, isArtistType } from "@/lib/utils";

interface TrackListProps {
  data: DetailData | null;
}

const TrackList = ({ data }: TrackListProps) => {
  const music = useSelector((state: RootState) => state.playMusic);
  const dispatch = useDispatch();

  const currentSong = music.tracks[music.currentSongIndex];

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

  const handlePlay = () => {
    dispatch(playMusicCurrent());
  };

  const handlePlayMusic = (track: TrackType) => {
    dispatch(
      playMusic({
        id: data?.detail.id,
        type: data?.detail.type,
        tracks: [track],
      })
    );
  };

  const handlePauseMusic = () => {
    dispatch(pauseMusicCurrent());
  };

  return (
    <>
      <div
        className="py-10 px-5 flex items-end bg-cover h-96 bg-black/100 relative"
        style={{
          backgroundImage: `${
            isArtistType(data?.detail)
              ? `url(${data?.detail?.banner})`
              : `linear-gradient(to bottom, ${data?.detail?.color_bg}, #000000)`
          }`,
        }}
      >
        <div className="relative z-50 flex gap-3 items-end">
          <div className="">
            <img
              className="w-[226px] h-[226px]"
              src={data?.detail.thumbnail}
              alt=""
            />
          </div>
          <div>
            {isArtistType(data?.detail) ? (
              <div className="flex items-center">
                <PiSealCheckFill className="text-blue-500 text-2xl" />
                <span className=" font-medium text-white">
                  Nghệ sĩ được xác minh
                </span>
              </div>
            ) : (
              <span className=" font-medium text-white">Bài hát</span>
            )}

            <h1 className="text-white  text-7xl py-3 font-black">
              {data?.detail.name}
            </h1>
            <div className="flex items-center">
              <span className="text-white">
                {data?.detail.popularity}k lượt theo dõi
              </span>
              {data?.detail.duration && (
                <>
                  <BsDot />
                  <span className="text-base-text">
                    {data?.detail.duration} giây
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50"></div>
      </div>
      <div className="bg-sub-background/20 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={handlePlayList}>
              <PlayPauseMusic
                isPlay={
                  music.type === data?.detail.type &&
                  music.isPlay &&
                  music.id === data?.detail.id
                    ? true
                    : false
                }
              />
            </button>
          </div>
        </div>
        <div className="font-bold text-3xl my-8">
          <h1>Phổ biến</h1>
        </div>
        <Table>
          <TableHeader>
            <TableHead className="w-5">#</TableHead>
            <TableHead>Tiêu đề</TableHead>
            <TableHead>Số lượt nghe</TableHead>
            <TableHead className="w-[150px]">
              <IoTimeOutline className="inline" /> Thời gian
            </TableHead>
          </TableHeader>
          <TableBody>
            {data?.tracks.map((track, index) => (
              <TableRow
                key={track.id}
                className="border-none hover:bg-gray-800 group text-base-text "
              >
                <TableCell className="font-medium px-4">
                  <div
                    className={
                      music.isPlay && currentSong?.id === track.id
                        ? "hidden"
                        : "block"
                    }
                  >
                    <div className="group-hover:block text-white">
                      <button onClick={() => handlePlayMusic(track)}>
                        <IoPlaySharp />
                      </button>
                    </div>
                  </div>
                  <div
                    className={
                      music.isPlay && currentSong?.id === track.id
                        ? "block"
                        : "hidden"
                    }
                  >
                    <img
                      width={20}
                      className={`group-hover:hidden ${
                        music.isPlay ? "block" : "hidden"
                      }`}
                      src="/music-wave.svg"
                      alt=""
                    />
                    <div
                      className={`group-hover:block hidden text-lg w-4 text-white ${
                        music.isPlay ? "hidden" : "block"
                      }`}
                    >
                      <button onClick={handlePauseMusic}>
                        <IoIosPause />
                      </button>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4">
                  <div className="flex items-center">
                    <Link href={`/track/${track.slug}`}>
                      <img
                        className="rounded-sm shadow-2xl object-cover flex w-10 h-10"
                        src={track.thumbnail}
                      />
                    </Link>
                    <div className="ml-4 font-semibold">
                      <div className="text-[14px] text-white hover:underline cursor-pointer">
                        <Link
                          href={`/track/${track.slug}`}
                          className="hover:underline group-hover:text-white"
                        >
                          {track.name}
                        </Link>
                      </div>
                      <div className="font-semibold text-[11px] group-hover:text-white hover:underline hover:text-white cursor-pointer">
                        <Link href={`${track.artist.slug}`}>
                          {track.artist.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 group-hover:text-white">
                  {formatNumber(track.play_nummber)}
                </TableCell>
                <TableCell className="text-center p-2 group-hover:text-white">
                  {track.duration}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default TrackList;
