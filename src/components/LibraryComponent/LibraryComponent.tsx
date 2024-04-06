import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { PiPushPinFill } from "react-icons/pi";

export default function LibraryComponent() {
  return (
    <div className="flex gap-2 px-2 hover:bg-sub-background rounded-lg">
      <Image
        className="rounded-lg w-12 h-12"
        src="https://misc.scdn.co/liked-songs/liked-songs-64.png"
        alt=""
      />
      <div>
        <h2 className="font-bold text-white">Bài hát đã thích</h2>
        <div className="text-icon-color flex items-center">
          <span className="text-green-400 mr-2">
            <PiPushPinFill />
          </span>
          Danh sách phát
          <span className="text-xl">
            <BsDot />
          </span>
          1 bài hát
        </div>
      </div>
    </div>
  );
}
