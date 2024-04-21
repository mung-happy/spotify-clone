import { trackType } from "@/types/track.type";
import SectionComponent from "../../components/SectionList/SecionComponent";
import { useRouter } from "next/router";

export default function Home() {
  
  return (
    <div className="bg-gradient-to-b from-[#353535] via-base-background to-base-background">
      <SectionComponent titel="Album nổi bật" url="vfdk"/>
     
    </div>
  );
}
