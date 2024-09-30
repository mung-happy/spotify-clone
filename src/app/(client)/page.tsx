import { trackType } from "@/types/track.type";
import SectionItem from "@/components/SectionList/SectionItem";
import { getMusic } from "@/services/Music";
import Link from "next/link";
import { getArtist } from "@/services/Artists";
import { getAlbum } from "@/services/Album";

export default async function Home() {
  const limit = 8
  const { payload } = await getMusic(limit);
  const musics: trackType[] = payload;
  const artists = await getArtist(limit)
  const albums = await getAlbum(limit)

  return (
    <div className="bg-gradient-to-b from-[#353535] via-base-background to-base-background">
       <div className="pt-3">
      <div className="flex justify-between items-center px-[22px]">
        <h2 className="font-bold text-2xl">Nghệ sĩ nổi bật</h2>
        <Link className="text-base-text text-sm" href={`/artist`}>
          Hiện tất cả
        </Link>
      </div>
      <div className="px-3 grid grid-cols-4">
      {artists.payload.map((artist) => (
        <SectionItem data={artist} rounded_img={true}/>
      ))}
      </div>
    </div>
      <div className="pt-3">
      <div className="flex justify-between items-center px-[22px]">
        <h2 className="font-bold text-2xl">Bài hát nổi bật</h2>
        <Link className="text-base-text text-sm" href={`/track`}>
          Hiện tất cả
        </Link>
      </div>
      <div className="px-3 grid grid-cols-4">
      {musics.map((tracks) => (
        <SectionItem data={tracks}/>
      ))}
      </div>
    </div>
    <div className="pt-3">
      <div className="flex justify-between items-center px-[22px]">
        <h2 className="font-bold text-2xl">Album nổi bật</h2>
        <Link className="text-base-text text-sm" href={`/track`}>
          Hiện tất cả
        </Link>
      </div>
      <div className="px-3 grid grid-cols-4">
      {albums.payload.map((album) => (
        <SectionItem data={album}/>
      ))}
      </div>
    </div>
    </div>
  );
}
