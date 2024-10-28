import { IoIosPause, IoIosPlay } from "react-icons/io";

interface PlayPauseMusicProps {
  isPlay: boolean;
}

export default function PlayPauseMusic({ isPlay }: PlayPauseMusicProps) {
  return (
    <button className="p-2 bg-green-500 rounded-full text-black">
      {isPlay ? <IoIosPause /> : <IoIosPlay />}
    </button>
  );
}
