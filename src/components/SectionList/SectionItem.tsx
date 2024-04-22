import { getMusic } from "@/services/Music";
import { trackType } from "@/types/track.type";
import Link from "next/link";

import { IoIosPlay } from "react-icons/io";
type Props = {
  rounded_img?: boolean;
};
export default async function SectionItem({ rounded_img = false}: Props) {
  
  const musics:trackType[] = await getMusic()

  return (
    <div className="grid grid-cols-4">
    {musics.map((tracks)=>(
          <Link href={`trackId/${tracks._id}`}>
      <div key={tracks._id} className="mt-3 hover:bg-[#252525] cursor-pointer w-max p-2 rounded-lg group">
        <div className="relative">
        <img
          className={`${
            rounded_img ? "rounded-full" : "rounded-md"
          } w-[200px] h-[200px] object-cover`}
          src={tracks.image}
          alt=""
        />
        <div className="absolute bottom-0 right-2 opacity-0 shadow-xl group-hover:bottom-2 group-hover:opacity-100 duration-300">
          <button className="p-2 bg-green-500 rounded-full text-black text-3xl">
            <IoIosPlay />
          </button>
        </div>
      </div>
      <div className="text-white pt-4 font-semibold text-[17px] text-nowrap text-ellipsis truncate text-container w-48 overflow-hidden whitespace-nowrap">
        {tracks.name}
      </div>
      <div className="text-gray-400 pt-1 pb-3 text-[14px]">
        {tracks.artists.name}
      </div>
    </div> 
          </Link>

    ))}
    
    </div>
  );
}
