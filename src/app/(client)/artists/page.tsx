import SectionContainer from "@/components/SectionList/SectionContainer";
import SectionItem from "@/components/SectionList/SectionItem";
import { getArtist } from "@/services/Artists";
import { DetailData } from "@/types/ultits.type";

export default async function PageArtist() {
  // const artists = await getArtist();
  const artists: DetailData[] = [];
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
