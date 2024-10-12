import { trackType } from "@/types/track.type";
import SectionItem from "@/components/SectionList/SectionItem";
import { getMusic } from "@/services/Tracks";
import SectionContainer from "@/components/SectionList/SectionContainer";

export default async function Pagetrack() {
  const { payload } = await getMusic();
  const musics: trackType[] = payload;
  return (
    <SectionContainer title="Bài hát nổi bật" link="">
      {musics.map((tracks) => (
        <SectionItem key={tracks._id} data={tracks} />
      ))}
    </SectionContainer>
  );
}
