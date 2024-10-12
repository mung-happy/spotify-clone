import { componentType } from "@/types/album.track";
import Link from "next/link";

import { IoIosPlay } from "react-icons/io";
type Props = {
  rounded_img?: boolean;
  data: componentType;
};
export default async function SectionItem({
  rounded_img = false,
  data,
}: Props) {
  return (
    <div className=" gap-2">
      <Link href={`/${data.type}/${data.slug}`}>
        <div
          key={data.slug}
          className="mt-3 hover:bg-[#252525] cursor-pointer w-max p-2 rounded-lg group"
        >
          <div className="relative">
            <img
              className={`${
                rounded_img ? "rounded-full" : "rounded-md"
              } w-[200px] h-[200px] object-cover`}
              src={data.thumbnail}
              alt=""
            />
            <div className="absolute bottom-0 right-2 opacity-0 shadow-xl group-hover:bottom-2 group-hover:opacity-100 duration-300">
              <button className="p-2 bg-green-500 rounded-full text-black text-3xl">
                <IoIosPlay />
              </button>
            </div>
          </div>
          <div className="text-white pt-4 font-semibold text-[17px] text-nowrap text-ellipsis truncate text-container w-48 overflow-hidden whitespace-nowrap">
            {data.name}
          </div>
          <div className="text-gray-400 pt-1 text-[14px]">{data.type}</div>
          {/* <div className="text-gray-400 pt-1 pb-3 text-[14px]">
            {data.artists?.name}
          </div> */}
        </div>
      </Link>
    </div>
  );
}
