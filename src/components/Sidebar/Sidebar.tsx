import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoLibrarySharp } from "react-icons/io5";
import CardItem from "./CardItem";

const cards = [
  {
    title: "Tạo danh sách đầu tiên của bạn",
    subTitle: "Rất dễ! Chúng tôi sẽ giúp bạn",
    buttonText: "Tạo danh sánh phát",
  },
  {
    title: "Hãy cùng tìm và theo dõi một số podcast",
    subTitle: "Chúng tôi sẽ cập nhật cho bạn thông tin về các tập mới",
    buttonText: "Duyệt các podcast",
  },
];

export default function Sidebar() {
  return (
    <nav id="SideNav" className="basis-[340px] flex flex-col shrink-0">
      <div className="p-3 bg-base-background rounded-lg">
        <Image
          alt=""
          className="pl-3"
          width={90}
          height={74}
          src="/spotify_logo.png"
        />
        <ul className="pt-3">
          <li>
            <Link className="font-bold text-white" href="/">
              <button className="flex items-center gap-5 h-10 px-3 py-1">
                <GoHomeFill className="w-6 h-6" />
                Trang chủ
              </button>
            </Link>
          </li>
          <li>
            <Link className="font-bold text-white" href="/search">
              <button className="flex items-center gap-5 text-icon-color h-10 px-3 py-1">
                <HiMiniMagnifyingGlass className="w-6 h-6" /> Tìm kiếm
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-3 pb-0 bg-base-background rounded-lg mt-2 flex-grow">
        <ul className="pt-3 flex justify-between items-center text-icon-color flex-grow">
          <li>
            <a className="font-bold" href="#">
              <button className="flex items-center gap-5 h-10 px-3 py-1">
                <IoLibrarySharp className="w-6 h-6" />
                Thư viện
              </button>
            </a>
          </li>
          <li>
            <FaPlus />
          </li>
        </ul>
        <div className="">
          {cards.map((card, index) => (
            <CardItem
              key={index}
              title={card.title}
              subTitle={card.subTitle}
              buttonText={card.buttonText}
            />
          ))}
          {/* <div className="text-white px-4 py-5 bg-sub-background rounded-lg mt-2">
            <p className="font-bold">Tạo danh sách đầu tiên của bạn</p>
            <p className="text-sm">Rất dễ! Chúng tôi sẽ giúp bạn</p>
            <button className="text-black font-medium text-sm h-8 rounded-full bg-white">
              <span className="px-4 py-1">Tạo danh sánh phát</span>
            </button>
          </div>
          <div className="text-white px-4 py-5 bg-sub-background rounded-lg mt-2">
            <p className="font-bold">Hãy cùng tìm và theo dõi một số podcast</p>
            <p className="text-sm">
              Chúng tôi sẽ cập nhật cho bạn thông tin về các tập mới
            </p>
            <button className="text-black font-medium text-sm h-8 rounded-full bg-white">
              <span className="px-4 py-1">Duyệt các podcast</span>
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
