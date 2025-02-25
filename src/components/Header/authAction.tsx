"use client";
import Link from "next/link";

if (typeof window !== "undefined") {
  const datalocal = localStorage.getItem("user");
  // console.log(datalocal);
}
export default function AuthAction() {
  return (
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
  );
}
