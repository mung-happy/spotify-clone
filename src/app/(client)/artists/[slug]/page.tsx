import TrackList from "@/components/TrackList/TrackList";
import { getArtistSlug } from "@/services/Artists";
import { DetailData } from "@/types/ultits.type";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  const data = await getArtistSlug(slug);

  return {
    title: `${data.detail.name} | Spotify`,
  };
}

export default async function PageId({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = await getArtistSlug(slug);

  return (
    <div
      className="bg-gradient-to-b  to-[500px] to-base-background"
      style={{
        backgroundColor: `backgroundColor:'rgb(88, 80, 80)'`,
        backgroundImage: `linear-gradient(to bottom,backgroundColor:'rgb(88, 80, 80)',#000000)`,
      }}
    >
      <TrackList data={data} />
    </div>
  );
}
