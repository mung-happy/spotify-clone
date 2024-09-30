import SectionContainer from "@/components/SectionList/SectionContainer";
import SectionItem from "@/components/SectionList/SectionItem";
import { getArtist } from "@/services/Artists";
import { artistType } from "@/types/artists.type";

export default async function Pagetrack() {
  const { payload } = await getArtist();
  const artists: artistType[] = payload;
  return (
    <SectionContainer title="Nghệ sĩ nổi bật" link="">
      {artists.map((artist) => (
        <SectionItem key={artist._id} data={artist} rounded_img={true} />
      ))}
    </SectionContainer>
  );
}
