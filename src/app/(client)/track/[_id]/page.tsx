import PlayPauseMusic from "@/components/PlayPauseButton/PlayPauseMusic";
import { IoIosAddCircleOutline, IoIosPause } from "react-icons/io";
import { BsThreeDots, BsDot } from "react-icons/bs";
import { FaListUl } from "react-icons/fa6";
import { IoTimeOutline, IoPlaySharp } from "react-icons/io5";
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
import { getMusic, getMusicId } from "@/services/Tracks";
import Link from "next/link";
export default async function PageId({ params }: { params: { _id: string } }) {
  const musics = await getMusic();
  const musicId = await getMusicId(params._id as string);
  return (
    <div className="bg-gradient-to-b  to-[500px] to-base-background">
      <div
        className="py-10 px-5 flex gap-3 items-end bg- "
        style={{
          backgroundColor: `${musicId.payload.color_bg}`,
          backgroundImage: `linear-gradient(to bottom,${musicId.payload.color_bg},#000000)`,
        }}
      >
        <div>
          <img
            className="w-[226px] h-[226px]"
            src={musicId.payload.image}
            alt=""
          />
        </div>
        <div>
          <span className="mb-2 font-bold text-white">Bài hát</span>
          <h1 className="text-white font-bold text-5xl py-3">
            {musicId.payload.name}
          </h1>
          {/* <div className="text-sm my-1">
              <span className="text-2xl font-normal">{musicId.artists.name}</span>
            </div> */}
          <div className="flex items-center">
            <img
              className="w-10 rounded-full"
              src={musicId.payload.artists.image}
              alt=""
            />
            <span>
              <Link
                href={`/artist/${musicId.payload.artists.slug}`}
                className="font-bold hover:underline "
              >
                {musicId.payload.artists.name}
              </Link>
            </span>
            <BsDot />
            <span className="font-medium">
              <span className="text-white">
                {musicId.payload.popularity}k lượt theo dõi
              </span>
              <span className="text-base-text"> . 3:54</span>
            </span>
          </div>
        </div>
      </div>

      <audio src="https://ia600304.us.archive.org/12/items/test-1_2003/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17.mp3">
        ngjdfngnj
      </audio>
      <div className="bg-sub-background/20 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-4xl">
            <PlayPauseMusic />
            <IoIosAddCircleOutline className="text-base-text hover:text-white hover:scale-105" />
            <BsThreeDots className="text-base-text hover:text-white hover:scale-105" />
          </div>
          <div>
            <span className="flex items-center gap-3 text-icon-color hover:text-white">
              Danh sách
              <span>
                <FaListUl />
              </span>
            </span>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableHead className="w-5">#</TableHead>
            <TableHead>Tiêu đề</TableHead>
            <TableHead>Album</TableHead>
            <TableHead className="w-[100px]">
              <IoTimeOutline className="mx-auto" />
            </TableHead>
            <TableRow></TableRow>
          </TableHeader>
          <TableBody>
            {musics.payload.map((invoice, index) => (
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
                    <Link href={`${invoice.slug}`}>
                      <img
                        className="rounded-sm shadow-2xl object-cover flex w-10 h-10"
                        src={invoice.image}
                      />
                    </Link>
                    <div className="ml-4 font-semibold">
                      <div className="text-[14px] text-white hover:underline cursor-pointer">
                        <Link
                          href={`${invoice.slug}`}
                          className="hover:underline group-hover:text-white"
                        >
                          {invoice.name}
                        </Link>
                      </div>
                      <div className="font-semibold text-[11px] group-hover:text-white hover:underline hover:text-white cursor-pointer">
                        <Link href={`/artist/${invoice.artists.slug}`}>
                          {invoice.artists.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="p-2">
                  <Link
                    href={`${invoice.slug}`}
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
    </div>
  );
}
