import SectionItem from "@/components/SectionList/SectionItem";
import { getArtist } from "@/services/Artists";
import { artistType } from "@/types/artists.type";

export default async function Pagetrack() {

  const { payload } = await getArtist();
  const artists: artistType[] = payload;
  return (
    <div className="bg-gradient-to-b from-[#353535] via-base-background to-base-background">
      <div className="pt-3">
      <div className="flex justify-between items-center px-[22px]">
        <h1 className="font-bold text-2xl">Nghệ sĩ nổi bật</h1>
      </div>
      <div className="px-3 grid grid-cols-4">
      {artists.map((artist) => (
        <SectionItem data={artist} rounded_img={true}/>
      ))}
      </div>
    </div>
     
    </div>
  );
}
