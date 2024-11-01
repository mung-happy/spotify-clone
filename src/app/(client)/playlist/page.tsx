// import PlayPauseMusic from "@/components/PlayPauseButton/PlayPauseMusic";
// import { IoIosAddCircleOutline, IoIosPause } from "react-icons/io";
// import { BsThreeDots, BsDot } from "react-icons/bs";
// import { FaListUl } from "react-icons/fa6";
// import { IoTimeOutline, IoPlaySharp } from "react-icons/io5";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { TrackType } from "@/types/track.type";
// import { getTracks } from "@/services/Tracks";
// export default async function ArtistPage() {
//   const musics: TrackType[] = await getTracks();
//   return (
//     <div className="bg-gradient-to-b from-blue-400 to-[500px] to-base-background">
//       <div className="py-10 px-5 flex gap-3 items-end bg-">
//         <div>
//           <img
//             className="w-[226px] h-[226px]"
//             src="https://seed-mix-image.spotifycdn.com/v6/img/artist/5dfZ5uSmzR7VQK0udbAVpf/vi/default"
//             alt=""
//           />
//         </div>
//         <div>
//           <span className="mb-2">Playlist</span>
//           <h1 className="text-white font-bold text-5xl py-3">Tuyển tập</h1>
//           <div className="text-sm my-1">
//             <span>Vũ Cát Tường</span>
//           </div>
//           <div className="flex items-center">
//             <img className="w-5" src="/spotify_logo_icon.png" alt="" />
//             <span>
//               <a href="" className="font-bold hover:underline ">
//                 Spotify
//               </a>
//             </span>
//             <BsDot />
//             <span className="font-medium">
//               <span className="text-white">50 bài hát, </span>
//               <span className="text-base-text">khoảng 3 giờ</span>
//             </span>
//           </div>
//         </div>
//       </div>
//       <audio src="https://ia600304.us.archive.org/12/items/test-1_2003/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17.mp3">
//         ngjdfngnj
//       </audio>
//       <div className="bg-sub-background/20 p-5">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-6 text-4xl">
//             <PlayPauseMusic />
//             <IoIosAddCircleOutline className="text-base-text hover:text-white hover:scale-105" />
//             <BsThreeDots className="text-base-text hover:text-white hover:scale-105" />
//           </div>
//           <div>
//             <span className="flex items-center gap-3 text-icon-color hover:text-white">
//               Danh sách
//               <span>
//                 <FaListUl />
//               </span>
//             </span>
//           </div>
//         </div>
//         <Table>
//           <TableHeader>
//             <TableHead className="w-5">#</TableHead>
//             <TableHead>Tiêu đề</TableHead>
//             <TableHead>Album</TableHead>
//             <TableHead className="w-[100px]">
//               <IoTimeOutline className="mx-auto" />
//             </TableHead>
//             <TableRow></TableRow>
//           </TableHeader>
//           <TableBody>
//             {musics.map((invoice, index) => (
//               <TableRow
//                 key={invoice.id}
//                 className="border-none hover:bg-base-text group text-base-text "
//               >
//                 <TableCell className="font-medium p-2">
//                   <div className="hidden">
//                     <div className="group-hover:hidden">{index + 1}</div>
//                     <div className="group-hover:block hidden text-white">
//                       <button>
//                         <IoPlaySharp />
//                       </button>
//                     </div>
//                   </div>
//                   <div>
//                     <img
//                       className="group-hover:hidden"
//                       src="/music-wave.svg"
//                       alt=""
//                     />
//                     <div className="group-hover:block hidden text-lg text-white">
//                       <button>
//                         <IoIosPause />
//                       </button>
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell className="p-2">
//                   <div className="flex items-center">
//                     <img
//                       className="rounded-sm shadow-2xl object-cover flex w-10 h-10"
//                       src={invoice.thumbnail}
//                     />

//                     <div className="ml-4 font-semibold">
//                       <div className="text-[14px] text-white hover:underline cursor-pointer">
//                         {invoice.name}
//                       </div>
//                       <div className="font-semibold text-[11px] group-hover:text-white hover:underline hover:text-white cursor-pointer">
//                         {invoice.slug}
//                       </div>
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell className="p-2">
//                   <a href="" className="hover:underline group-hover:text-white">
//                     {invoice.name}
//                   </a>
//                 </TableCell>
//                 <TableCell className="text-right p-2 group-hover:text-white">
//                   {invoice.popularity}000view
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }
