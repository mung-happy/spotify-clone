
import PlayPauseMusic from "@/components/PlayPauseButton/PlayPauseMusic";
import { IoIosAddCircleOutline, IoIosPause } from "react-icons/io";
import { BsThreeDots, BsDot } from "react-icons/bs";
import { FaListUl } from "react-icons/fa6";
import { IoTimeOutline, IoPlaySharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
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
import { getAlbumId } from "@/services/Album";
import { albumType } from "@/types/album.type";
export default async function PageId({ params }: { params: { _id: string } }) {
    const album: albumType = await getAlbumId(params._id as string)

    return (
        <div className="bg-gradient-to-b to-[400px] to-base-background" style={{ backgroundColor: `${album.color_bg}`, backgroundImage: `linear-gradient(to bottom,${album.color_bg},#000000)`}}>

            <div className="py-10 px-5 flex gap-3 items-end" >
                <div>
                    <img
                        className="w-[150px] h-[150px] mt-10 rounded"
                        src={album.image}
                        alt=""
                    />
                </div>
                <div>
                    <span className="mb-2 font-bold text-white">Album</span>
                    <h1 className="text-white font-bold text-5xl py-3">{album.name}</h1>
                    {/* <div className="text-sm my-1">
              <span className="text-2xl font-normal">{album.artists.name}</span>
            </div> */}
                    <div className="flex items-center">
                        <img className="w-8 rounded-full" src={album.artists.images} alt="" />
                        <span>
                            <Link href={`artist/${album.artists._id}`} className="font-bold hover:underline ">
                                {album.artists.name}
                            </Link>
                        </span>
                        <BsDot />
                        {/* <span className="font-medium">
                <span className="text-white">{album.name}k lượt theo dõi</span>
                <span className="text-base-text"> . 3:54</span>
              </span> */}
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
                        <CiHeart className="text-base-text hover:text-white hover:scale-105" />
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
                        
                        <TableHead className="w-[100px]">
                            <IoTimeOutline className="mx-auto" />
                        </TableHead>
                        <TableRow></TableRow>
                    </TableHeader>
                    <TableBody>
                        {album.tracks.map((invoice, index) => (
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
                                        <Link href={`${invoice._id}`}>
                      <img
                        className="rounded-sm shadow-2xl object-cover flex w-10 h-10"
                        src={invoice.image}
                      />
                        </Link>
                                        <div className="ml-4 font-semibold">
                                            <div className="text-[14px] text-white hover:underline cursor-pointer">
                                                <Link href={`${invoice._id}`} className="hover:underline group-hover:text-white">
                                                    {invoice.name}
                                                <Link className="font-semibold text-[11px] group-hover:text-white hover:underline hover:text-white cursor-pointer" href={`artist/${invoice.artists._id}`}>
                                                    {invoice.artists.name}
                                                </Link>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </TableCell>
                                {/* <TableCell className="p-2">
                                    <Link href={`${invoice._id}`} className="hover:underline group-hover:text-white">
                                        {invoice.name}
                                    </Link>
                                </TableCell> */}
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