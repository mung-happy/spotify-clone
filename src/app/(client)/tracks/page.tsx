import { TrackType } from "@/types/track.type";
import SectionItem from "@/components/SectionList/SectionItem";
import { getTracks } from "@/services/Tracks";
import SectionContainer from "@/components/SectionList/SectionContainer";

export default async function Pagetrack() {
  const data = await getTracks();

  return (
    <SectionContainer title="Bài hát nổi bật" link="">
      {data.map((track) => (
        <SectionItem key={track.detail.slug} data={track} />
      ))}
    </SectionContainer>
  );
}
