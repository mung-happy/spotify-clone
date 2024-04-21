import PlayPauseMusic from "@/components/PlayPauseButton/PlayPauseMusic";
import { IoIosAddCircleOutline, IoIosPause } from "react-icons/io";
import { BsThreeDots, BsDot } from "react-icons/bs";
import { FaListUl } from "react-icons/fa6";
import { IoTimeOutline, IoPlaySharp } from "react-icons/io5";
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
export default function ArtistPage() {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-blue-400 to-[500px] to-base-background">
      <div className="py-10 px-5 flex gap-3 items-end bg-">
        <div>
          <img
            className="w-[226px] h-[226px]"
            src="https://seed-mix-image.spotifycdn.com/v6/img/artist/5dfZ5uSmzR7VQK0udbAVpf/vi/default"
            alt=""
          />
        </div>
        <div>
          <span className="mb-2">Playlist</span>
          <h1 className="text-white font-bold text-5xl py-3">Tuyển tập</h1>
          <div className="text-sm my-1">
            <span>Vũ Cát Tường</span>
          </div>
          <div className="flex items-center">
            <img className="w-5" src="/spotify_logo_icon.png" alt="" />
            <span>
              <a href="" className="font-bold hover:underline ">
                Spotify
              </a>
            </span>
            <BsDot />
            <span className="font-medium">
              <span className="text-white">50 bài hát, </span>
              <span className="text-base-text">khoảng 3 giờ</span>
            </span>
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
            <IoIosAddCircleOutline className="text-base-text hover:text-white hover:scale-105" />
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
            <TableHead>Album</TableHead>
            <TableHead className="w-[100px]">
              <IoTimeOutline className="mx-auto" />
            </TableHead>
            <TableRow></TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow
                key={invoice.invoice}
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
                    <img
                      className="rounded-sm shadow-2xl object-cover flex w-10 h-10"
                      src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                    />

                    <div className="ml-4 font-semibold">
                      <div className="text-[14px] text-white hover:underline cursor-pointer">
                        Đen đá không đường
                      </div>
                      <div className="font-semibold text-[11px] group-hover:text-white hover:underline hover:text-white cursor-pointer">
                        AMEE
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="p-2">
                  <a href="" className="hover:underline group-hover:text-white">
                    {invoice.paymentStatus}
                  </a>
                </TableCell>
                <TableCell className="text-right p-2 group-hover:text-white">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
