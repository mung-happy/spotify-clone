import SectionContainer from "@/components/SectionList/SectionContainer";
import SectionItem from "@/components/SectionList/SectionItem";
import { getArtist } from "@/services/Artists";
import { getTracks } from "@/services/Tracks";
import { DetailData } from "@/types/ultits.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spotify - Trải nghiệm âm nhạc của bạn mọi lúc, mọi nơi",
  description:
    "Khám phá hàng triệu bài hát, album, và playlist trên Spotify - nền tảng phát nhạc hàng đầu. Tạo playlist yêu thích và nghe nhạc mọi lúc mọi nơi!",
  keywords:
    "âm nhạc, nghe nhạc, playlist, album, bài hát, trực tuyến, phát nhạc, Spotify",
};

export default async function Home() {
  // const artists = await getArtist(6);
  // const tracks = await getTracks(6);

  const artists: DetailData[] = [];
  const tracks: DetailData[] = [];
  return (
    <>
      <div className="bg-gradient-to-b from-[#353535] via-base-background to-base-background">
        <SectionContainer title="Nghệ sĩ nổi bật" link="/artists">
          {artists.map((artist) => (
            <SectionItem
              key={artist.detail.slug}
              data={artist}
              rounded_img={true}
            />
          ))}
        </SectionContainer>
        <SectionContainer title="Bài hát nổi bật" link="/tracks">
          {tracks.map((tracks) => (
            <SectionItem key={tracks.detail.slug} data={tracks} />
          ))}
        </SectionContainer>
        {/* <SectionContainer title="Album nổi bật" link="/track">
        {albums.payload.map((album) => (
          <SectionItem key={album._id} data={album} />
        ))}
      </SectionContainer> */}
      </div>
    </>
  );
}
