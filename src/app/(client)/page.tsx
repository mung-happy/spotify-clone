import { trackType } from "@/types/track.type";
import SectionItem from "@/components/SectionList/SectionItem";
import { getMusic } from "@/services/Music";
import Link from "next/link";
import { getArtist } from "@/services/Artists";
import { getAlbum } from "@/services/Album";
import SectionContainer from "@/components/SectionList/SectionContainer";

export default async function Home() {
  const limit = 8;
  const { payload } = await getMusic(limit);
  const musics: trackType[] = payload;
  const artists = await getArtist(limit);
  const albums = await getAlbum(limit);

  return (
    <div className="bg-gradient-to-b from-[#353535] via-base-background to-base-background">
      <SectionContainer title="Nghệ sĩ nổi bật" link="/artist">
        {artists.payload.map((artist) => (
          <SectionItem key={artist._id} data={artist} rounded_img={true} />
        ))}
      </SectionContainer>
      <SectionContainer title="Bài hát nổi bật" link="/track">
        {musics.map((tracks) => (
          <SectionItem key={tracks._id} data={tracks} />
        ))}
      </SectionContainer>
      <SectionContainer title="Album nổi bật" link="/track">
        {albums.payload.map((album) => (
          <SectionItem key={album._id} data={album} />
        ))}
      </SectionContainer>
    </div>
  );
}
