import { trackType } from "@/types/track.type";
import SectionItem from "@/components/SectionList/SectionItem";
import { getMusic } from "@/services/Music";

export default async function Pagetrack() {

  const { payload } = await getMusic();
  const musics: trackType[] = payload;
  return (
    <div className="bg-gradient-to-b from-[#353535] via-base-background to-base-background">
      <div className="pt-3">
      <div className="flex justify-between items-center px-[22px]">
        <h1 className="font-bold text-2xl">Bài hát nổi bật</h1>
      </div>
      <div className="px-3 grid grid-cols-4">
      {musics.map((tracks) => (
        <SectionItem data={tracks}/>
      ))}
      </div>
    </div>
     
    </div>
  );
}
