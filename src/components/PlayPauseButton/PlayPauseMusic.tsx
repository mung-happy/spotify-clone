import { IoIosPause, IoIosPlay } from "react-icons/io";

interface PlayPauseMusicProps {
  isPlay: boolean;
}

export default function PlayPauseMusic({ isPlay }: PlayPauseMusicProps) {
  return (
    <div className="p-2 bg-green-500 rounded-full text-black w-full h-full flex justify-center items-center text-6xl">
      {isPlay ? <IoIosPause /> : <IoIosPlay />}
    </div>
  );
}
