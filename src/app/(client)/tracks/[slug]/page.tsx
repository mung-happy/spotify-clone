import TrackList from "@/components/TrackList/TrackList";
import { getTracksBySlug } from "@/services/Tracks";
// import { DetailData } from "@/types/ultits.type";
// import { useParams } from "next/navigation";
// import { useCallback, useEffect, useState } from "react";

export default async function PageId({ params }: { params: { slug: string } }) {
  const data = await getTracksBySlug(params.slug);
  // const [track, setTrack] = useState<DetailData | null>(null);
  // const params = useParams();

  // const getTrack = useCallback(async () => {
  //   setTrack(data);
  // }, [params.slug]);

  // useEffect(() => {
  //   getTrack();
  // }, [getTrack]);

  return (
    <div className="bg-gradient-to-b  to-[500px] to-base-background">
      <TrackList data={data} />
    </div>
  );
}
