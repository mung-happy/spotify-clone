"use client";

import TrackList from "@/components/TrackList/TrackList";
import { getTracksBySlug } from "@/services/Tracks";
import { DetailData } from "@/types/ultits.type";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function PageId() {
  const [track, setTrack] = useState<DetailData | null>(null);
  const params = useParams();

  const getTrack = useCallback(async () => {
    const data = await getTracksBySlug(String(params.slug));
    setTrack(data);
  }, [params.slug]);

  useEffect(() => {
    getTrack();
  }, [getTrack]);

  return (
    <div className="bg-gradient-to-b  to-[500px] to-base-background">
      <TrackList data={track} />
    </div>
  );
}
