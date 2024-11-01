import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import AuthAction from "./authAction";
export default function Header() {
  return (
    <header
      id="TopNav"
      className="bg-base-background sticky rounded-t-lg h-[60px] top-0 px-5 right-2 z-20 flex items-center justify-center"
    >
      <Link href="/">
        <img width={100} src="./spotify_logo.png" alt="" />
      </Link>
      {/* <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-full bg-black p-[6px] text-icon-color cursor-pointer"
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          className="rounded-full bg-black p-[6px] text-icon-color cursor-pointer"
        >
          <FaChevronRight />
        </button>
      </div>
      <AuthAction /> */}
    </header>
  );
}
