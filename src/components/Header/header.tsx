import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Header() {
  return (
    <header
      id="TopNav"
      className="bg-base-background sticky rounded-t-lg h-[60px] top-0 px-5 right-2 z-20 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
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
      <div className="flex items-center ml-6">
        <Link href={"/register"}>
          <button
            type="button"
            className="rounded-full text-base-text font-bold p-[1px] cursor-pointer"
          >
            Đăng kí
          </button>
        </Link>
        <Link href={"/login"}>
          <button
            type="button"
            className="rounded-full bg-white text-black px-8 py-2 font-bold p-[1px] hover:bg-[#] ml-4 cursor-pointer"
          >
            Đăng nhập
          </button>
        </Link>
      </div>
    </header>
  );
}
