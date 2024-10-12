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

import { trackType } from "@/types/track.type";
import { getMusic } from "@/services/Tracks";
import Link from "next/link";
import { artistType } from "@/types/artists.type";
import { getArtistId } from "@/services/Artists";
import { getAlbumId } from "@/services/Album";
import SectionItem from "@/components/SectionList/SectionItem";
export default async function PageId({ params }: { params: { _id: string } }) {
  const artistId = await getArtistId(params._id as string);
  const formatNumber = (number: { toString: () => string }) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div
      className="bg-gradient-to-b  to-[500px] to-base-background"
      style={{
        backgroundColor: `backgroundColor:'rgb(88, 80, 80)'`,
        backgroundImage: `linear-gradient(to bottom,backgroundColor:'rgb(88, 80, 80)',#000000)`,
      }}
    >
      <div
        className="py-10 px-5 flex gap-3 items-end bg- bg-cover h-60 bg-black"
        style={{ backgroundImage: `url(${artistId.payload.banner})` }}
      >
        {/* <div>
            <img
              className="w-[226px] h-[226px]"
              src={artistId.images}
              alt=""
            />
          </div> */}
        <div>
          <div className="flex items-center">
            <PiSealCheckFill className="text-blue-500 text-2xl" />
            <span className=" font-medium text-white">
              Nghệ sĩ được xác minh
            </span>
          </div>
          <h1 className="text-white  text-7xl py-3 font-black">
            {artistId.payload.name}
          </h1>
          <span className="mb-2 font-semibold text-white">
            {formatNumber(`${artistId.payload.followers.total}`)} người theo dõi
            hàng tháng
          </span>
          {/* <div className="text-sm my-1">
              <span className="text-2xl font-normal">{musicId.artists.name}</span>
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

      <audio src="https://ia600304.us.archive.org/12/items/test-1_2003/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17.mp3">
        ngjdfngnj
      </audio>
      <div className="bg-sub-background/20 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-4xl">
            <PlayPauseMusic />
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
            {/* <TableHead className="w-5"></TableHead>
              <TableHead>Tiêu đề</TableHead>
              <TableHead>Album</TableHead>
              <TableHead className="w-[100px]">
                <IoTimeOutline className="mx-auto" />
              </TableHead> */}
            {/* <TableRow></TableRow> */}
          </TableHeader>
          <TableBody>
            {artistId.payload.tracks?.map((invoice, index) => (
              <TableRow
                key={invoice._id}
                className="border-none hover:bg-base-text group text-base-text "
              >
                <TableCell className="font-medium p-2">
                  <div className="hidden">
                    <div className="group-hover:hidden">{index + 1}</div>
                    <div className="group-hover:block hidden text-white">
                      <button>
                        <IoPlaySharp />
                      </button>
                    </div>
                  </div>
                  <div>
                    <img
                      className="group-hover:hidden"
                      src="/music-wave.svg"
                      alt=""
                    />
                    <div className="group-hover:block hidden text-lg text-white">
                      <button>
                        <IoIosPause />
                      </button>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="p-2">
                  <div className="flex items-center">
                    <Link href={`/track/${invoice.slug}`}>
                      <img
                        className="rounded-sm shadow-2xl object-cover flex w-10 h-10"
                        src={invoice.image}
                      />
                    </Link>
                    <div className="ml-4 font-semibold">
                      <div className="text-[14px] text-white hover:underline cursor-pointer">
                        <Link
                          href={`/track/${invoice.slug}`}
                          className="hover:underline group-hover:text-white"
                        >
                          {invoice.name}
                        </Link>
                      </div>
                      <div className="font-semibold text-[11px] group-hover:text-white hover:underline hover:text-white cursor-pointer">
                        <Link href={`${invoice.artists.slug}`}>
                          {invoice.artists.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="p-2">
                  <Link
                    href={`track/${invoice.slug}`}
                    className="hover:underline group-hover:text-white"
                  >
                    {invoice.name}
                  </Link>
                </TableCell>
                <TableCell className="text-right p-2 group-hover:text-white">
                  {invoice.popularity}000view
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="p-3">
        <h2 className="font-semibold p-3 text-3xl">Album</h2>
        <div className="grid grid-cols-4">
          {artistId.payload.album.map((album) => (
            <SectionItem data={album} />
          ))}
        </div>
      </div>
    </div>
  );
}
