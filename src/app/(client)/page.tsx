import SectionContainer from "@/components/SectionList/SectionContainer";
import SectionItem from "@/components/SectionList/SectionItem";
import { getArtist } from "@/services/Artists";
import { getTracks } from "@/services/Tracks";

export default async function Home() {
  const artists = await getArtist();
  const tracks = await getTracks();

  return (
    <div className="bg-gradient-to-b from-[#353535] via-base-background to-base-background">
      <SectionContainer title="Nghệ sĩ nổi bật" link="/artist">
        {artists.map((artist) => (
          <SectionItem key={artist.id} data={artist} rounded_img={true} />
        ))}
      </SectionContainer>
      <SectionContainer title="Bài hát nổi bật" link="/track">
        {tracks.map((tracks) => (
          <SectionItem key={tracks.id} data={tracks} />
        ))}
      </SectionContainer>
      {/* <SectionContainer title="Album nổi bật" link="/track">
        {albums.payload.map((album) => (
          <SectionItem key={album._id} data={album} />
        ))}
      </SectionContainer> */}
    </div>
  );
}
