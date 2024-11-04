import TrackList from "@/components/TrackList/TrackList";
import { getTracksBySlug } from "@/services/Tracks";
import { Metadata } from "next";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }): Promise<Metadata> {
//   // read route params
//   const slug = (await params).slug;

//   const data = await getTracksBySlug(slug);

//   return {
//     title: `${data.detail.name} - song and lyric`,
//   };
// }

export default async function PageId({ params }: { params: { slug: string } }) {
  // const data = await getTracksBySlug(params.slug);

  return (
    <div className="bg-gradient-to-b  to-[500px] to-base-background">
      {/* <TrackList data={data} /> */}
    </div>
  );
}
