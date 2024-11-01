// import { getGenres } from "@/services/Genres";
// import { genresType } from "@/types/genres.type";
// type Props ={

// }
// export default async function SearchPage({}) {
//   const genres = await getGenres()
//   return (
//     <section className="w-full bg-zinc-900 p-2">
//       <div className="bg-zinc-900 p-4 rounded-md">
//         {/* History */}
//         <div className="">
//           <h2 className="text-4xl font-bold mb-2 text-white">
//             Recent searches
//           </h2>
//           <div className="w-full h-42 grid grid-cols-5 gap-4">
//             <a href="#">
//               <div className="relative ">
//                 <img
//                   className="w-[167px] h-[167px] rounded-md"
//                   src="https://i.scdn.co/image/ab67616d00001e020ecdf596e76b0403506c1375"
//                   alt="Music"
//                 />
//                 <h3 className="text-white text-xl font-semibold mt-1">
//                   Đánh Đổi
//                 </h3>
//                 <div>
//                   <p className="text-slate-500 text-sm font-medium">
//                     2023.Obito
//                   </p>
//                 </div>
//               </div>
//             </a>
//             <a href="#">
//               <div className="relative ">
//                 <img
//                   className="w-[167px] h-[167px] rounded-md"
//                   src="https://i.scdn.co/image/ab67616d00001e020ecdf596e76b0403506c1375"
//                   alt="Music"
//                 />
//                 <h3 className="text-white text-xl font-semibold mt-1">
//                   Đánh Đổi
//                 </h3>
//                 <div>
//                   <p className="text-slate-500 text-sm font-medium">
//                     2023.Obito
//                   </p>
//                 </div>
//               </div>
//             </a>
//             <a href="#">
//               <div className="relative ">
//                 <img
//                   className="w-[167px] h-[167px] rounded-md"
//                   src="https://i.scdn.co/image/ab67616d00001e020ecdf596e76b0403506c1375"
//                   alt="Music"
//                 />
//                 <h3 className="text-white text-xl font-semibold mt-1">
//                   Đánh Đổi
//                 </h3>
//                 <div>
//                   <p className="text-slate-500 text-sm font-medium">
//                     2023.Obito
//                   </p>
//                 </div>
//               </div>
//             </a>
//           </div>
//         </div>
//         {/* Category */}
//         <div className="mt-6">
//           <h2 className="xl:block text-4xl font-bold mb-2 text-white">
//             Browse all
//           </h2>
//           <div className="w-full grid grid-cols-5 gap-6">
//           {genres.payload.map((gen)=>(
//           <div key={gen._id} className={`w-full pt-[100%] relative overflow-hidden rounded-lg`} style={{backgroundColor:`${gen.display.bg_color}`}}>
//               <div className="p-2 absolute top-0 z-10">
//                 <h2 className="text-2xl font-bold  text-white w-full mb-4">
//                   {gen.name}
//                 </h2>
//               </div>
//               <div className="absolute -bottom-0 -right-5 rotate-12">
//                 <img
//                   src={gen.display.image}
//                   alt="Song Thumbnail"
//                   className="w-[100px]"
//                 />
//               </div>
//             </div>

//           ))}

//             {/* Add more search results here */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
