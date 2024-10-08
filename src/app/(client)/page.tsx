import { getArtist } from "@/services/Artists";

export default async function Home() {
  const artists = await getArtist();
  console.log("data", artists);

  return (
    <div className="bg-gradient-to-b from-[#353535] via-base-background to-base-background">
      {/* <SectionContainer title="Nghệ sĩ nổi bật" link="/artist">
        {artists.payload.map((artist) => (
          <SectionItem key={artist._id} data={artist} rounded_img={true} />
        ))}
      </SectionContainer> */}
      {/* <SectionContainer title="Bài hát nổi bật" link="/track">
        {musics.map((tracks) => (
          <SectionItem key={tracks._id} data={tracks} />
        ))}
      </SectionContainer>
      <SectionContainer title="Album nổi bật" link="/track">
        {albums.payload.map((album) => (
          <SectionItem key={album._id} data={album} />
        ))}
      </SectionContainer> */}
    </div>
  );
}
