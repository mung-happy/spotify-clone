import SectionContainer from "@/components/SectionList/SectionContainer";
import SectionItem from "@/components/SectionList/SectionItem";
import { getArtist } from "@/services/Artists";

export default async function Pagetrack() {
  const artists = await getArtist();

  return (
    <SectionContainer title="Nghệ sĩ nổi bật" link="">
      {artists.map((artist) => (
        <SectionItem
          key={artist.detail.slug}
          data={artist}
          rounded_img={true}
        />
      ))}
    </SectionContainer>
  );
}
