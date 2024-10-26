"use client";

import PlayPauseMusic from "@/components/PlayPauseButton/PlayPauseMusic";
import { IoIosAddCircleOutline, IoIosPause } from "react-icons/io";
import { BsThreeDots, BsDot } from "react-icons/bs";
import { FaListUl } from "react-icons/fa6";
import { IoTimeOutline, IoPlaySharp } from "react-icons/io5";
import { PiSealCheckFill } from "react-icons/pi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArtistDetail } from "@/types/artists.type";
import axios from "axios";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  pauseMusicCurrent,
  playMusic,
  playMusicCurrent,
} from "@/redux/playMusic/slice";
import { RootState } from "@/redux/store";
import { TrackType } from "@/types/track.type";

const TrackList = () => {
  const params = useParams();
  const audioRefs = useRef<HTMLAudioElement | null>(null);
  const [artist, setArtist] = useState<ArtistDetail | null>(null);

  const music = useSelector((state: RootState) => state.playMusic);
  const dispatch = useDispatch();
  const getArtistDetail = useCallback(async () => {
    const response = await axios.get(
      `http://localhost:3000/api/artists/${params.slug}`
    );
    setArtist(response.data.data);
  }, [params.slug]);

  useEffect(() => {
    getArtistDetail();
  }, [getArtistDetail]);
  console.log(artist);

  const handlePlayList = () => {
    dispatch(playMusicCurrent());
  };

  const handlePlayMusic = (track: TrackType) => {
    dispatch(playMusic({ track }));
  };

  const handlePauseMusic = () => {
    dispatch(pauseMusicCurrent());
  };
  return (
    <>
      <div
        className="py-10 px-5 flex gap-3 items-end bg- bg-cover h-96 bg-black"
        style={{ backgroundImage: `url(${artist?.artist.banner})` }}
      >
        <div>
          <img
            className="w-[226px] h-[226px]"
            src={artist?.artist.thumbnail}
            alt=""
          />
        </div>
        <div>
          <div className="flex items-center">
            <PiSealCheckFill className="text-blue-500 text-2xl" />
            <span className=" font-medium text-white">
              Nghệ sĩ được xác minh
            </span>
          </div>
          <h1 className="text-white  text-7xl py-3 font-black">
            {artist?.artist.name}
          </h1>
          {/* <span className="mb-2 font-semibold text-white">
        {formatNumber(`${artist}`)} người theo dõi
        hàng tháng
      </span> */}
          {/* <div className="text-sm my-1">
        <span className="text-2xl font-normal">{data.artist.name}</span>
      </div> */}
          {/* <div className="flex items-center">
          <img className="w-10 rounded-full" alt="" />
          <span>
            <a href="" className="font-bold hover:underline ">
              {musicId.artists.name}
            </a>
          </span>
          <BsDot />
          <span className="font-medium">
            <span className="text-white">{musicId.popularity}k lượt theo dõi</span>
            <span className="text-base-text"> . 3:54</span>
          </span>
        </div> */}
        </div>
      </div>
      <div className="bg-sub-background/20 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-4xl">
            <button onClick={handlePlayList}>
              <PlayPauseMusic />
            </button>
            {/* <IoIosAddCircleOutline className="text-base-text hover:text-white hover:scale-105" /> */}
            <Link
              href={""}
              className="text-sm font-bold border border-gray-100 border-solid rounded-full w-24 p-1 text-center hover:text-white hover:scale-105"
            >
              Theo dõi
            </Link>
            <BsThreeDots className="text-base-text hover:text-white hover:scale-105" />
          </div>
          {/* <div>
            <span className="flex items-center gap-3 text-icon-color hover:text-white">
              Danh sách
              <span>
                <FaListUl />
              </span>
            </span>
          </div> */}
        </div>
        <div className="font-bold mt-3 text-3xl mb-8">
          <h1>Phổ biến</h1>
        </div>
        <Table>
          <TableHeader>
            <TableHead className="w-5"></TableHead>
            <TableHead>Tiêu đề</TableHead>
            <TableHead></TableHead>
            <TableHead className="w-[100px]">
              <IoTimeOutline className="mx-auto" />
            </TableHead>
            <TableRow></TableRow>
          </TableHeader>
          <TableBody>
            {artist?.tracks.map((track, index) => (
              <TableRow
                key={track.id}
                className="border-none hover:bg-base-text group text-base-text "
              >
                <TableCell className="font-medium p-2">
                  <div
                    className={
                      music.play && music.track?.id === track.id
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
                      music.play && music.track?.id === track.id
                        ? "block"
                        : "hidden"
                    }
                  >
                    <img
                      width={20}
                      className={`group-hover:hidden ${
                        music.play ? "block" : "hidden"
                      }`}
                      src="/music-wave.svg"
                      alt=""
                    />
                    <div
                      className={`group-hover:block hidden text-lg w-4 text-white ${
                        music.play ? "hidden" : "block"
                      }`}
                    >
                      <button onClick={handlePauseMusic}>
                        <IoIosPause />
                      </button>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="p-2">
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
                        <Link href={`${artist.artist.slug}`}>
                          {artist.artist.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="p-2">
                  <Link
                    href={`track/${track.slug}`}
                    className="hover:underline group-hover:text-white"
                  >
                    {track.name}
                  </Link>
                </TableCell>
                <TableCell className="text-right p-2 group-hover:text-white">
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
