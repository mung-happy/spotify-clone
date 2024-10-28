"use client";

import TrackList from "@/components/TrackList/TrackList";
import { getArtistSlug } from "@/services/Artists";
import { DetailData } from "@/types/ultits.type";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function PageId() {
  const [artist, setArtist] = useState<DetailData | null>(null);
  const params = useParams();

  const getTrack = useCallback(async () => {
    const data = await getArtistSlug(String(params.slug));
    setArtist(data);
  }, [params.slug]);

  useEffect(() => {
    getTrack();
  }, [getTrack]);

  return (
    <div
      className="bg-gradient-to-b  to-[500px] to-base-background"
      style={{
        backgroundColor: `backgroundColor:'rgb(88, 80, 80)'`,
        backgroundImage: `linear-gradient(to bottom,backgroundColor:'rgb(88, 80, 80)',#000000)`,
      }}
    >
      <TrackList data={artist} />
      {/* <div className="p-3">
        <h2 className="font-semibold p-3 text-3xl">Album</h2>
        <div className="grid grid-cols-4">
          {artist.payload.album.map((album) => (
            <SectionItem data={album} />
          ))}
        </div>
      </div> */}
    </div>
  );
}
