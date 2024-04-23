import { trackType } from "@/types/track.type";
import SectionItem from "./SectionItem";
import { getMusic } from "@/services/Music";

type Props = {
  titel: string;
  url: string;
  
};
export default async function SectionComponent({ titel}: Props) {
  const musics:trackType[] = await getMusic()
  return (
    <div className="pt-3">
      <div className="flex justify-between items-center px-[22px]">
        <h2 className="font-bold text-2xl">{titel}</h2>
        <a className="text-base-text text-sm" href="">
          Hiện tất cả
        </a>
      </div>
      <div className="px-3 grid grid-cols-4">
      {musics.map((tracks)=>(
        <SectionItem  tracks={tracks}/>
      ))}
      </div>
    </div>
  );
}
