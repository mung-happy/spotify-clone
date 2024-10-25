import TrackList from "@/components/TrackList/TrackList";

export default async function PageId() {
  return (
    <div
      className="bg-gradient-to-b  to-[500px] to-base-background"
      style={{
        backgroundColor: `backgroundColor:'rgb(88, 80, 80)'`,
        backgroundImage: `linear-gradient(to bottom,backgroundColor:'rgb(88, 80, 80)',#000000)`,
      }}
    >
      <TrackList />
      <div className="p-3">
        <h2 className="font-semibold p-3 text-3xl">Album</h2>
        {/* <div className="grid grid-cols-4">
          {artist.payload.album.map((album) => (
            <SectionItem data={album} />
          ))}
        </div> */}
      </div>
    </div>
  );
}
