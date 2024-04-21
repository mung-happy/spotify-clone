export default function SearchPage() {
  return (
    <section className="w-full bg-zinc-900 p-2">
      <div className="bg-zinc-900 p-4 rounded-md">
        {/* History */}
        <div className="">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Recent searches
          </h2>
          <div className="w-full h-42 grid grid-cols-5 gap-4">
            <a href="#">
              <div className="relative ">
                <img
                  className="w-[167px] h-[167px] rounded-md"
                  src="https://i.scdn.co/image/ab67616d00001e020ecdf596e76b0403506c1375"
                  alt="Music"
                />
                <h3 className="text-white text-xl font-semibold mt-1">
                  Đánh Đổi
                </h3>
                <div>
                  <p className="text-slate-500 text-sm font-medium">
                    2023.Obito
                  </p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="relative ">
                <img
                  className="w-[167px] h-[167px] rounded-md"
                  src="https://i.scdn.co/image/ab67616d00001e020ecdf596e76b0403506c1375"
                  alt="Music"
                />
                <h3 className="text-white text-xl font-semibold mt-1">
                  Đánh Đổi
                </h3>
                <div>
                  <p className="text-slate-500 text-sm font-medium">
                    2023.Obito
                  </p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="relative ">
                <img
                  className="w-[167px] h-[167px] rounded-md"
                  src="https://i.scdn.co/image/ab67616d00001e020ecdf596e76b0403506c1375"
                  alt="Music"
                />
                <h3 className="text-white text-xl font-semibold mt-1">
                  Đánh Đổi
                </h3>
                <div>
                  <p className="text-slate-500 text-sm font-medium">
                    2023.Obito
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* Category */}
        <div className="mt-6">
          <h2 className="xl:block text-4xl font-bold mb-2 text-white">
            Browse all
          </h2>
          <div className="w-full grid grid-cols-5 gap-6">
            {/* <div className="max-w-40 h-40 overflow-hidden bg-pink-700 rounded-lg ">
              <div className="absolute">
                <h2 className="text-2xl font-bold text-white w-full mb-4">
                  MUSIC
                </h2>
              </div>
              <div className="relative w-max origin-bottom-right">
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb"
                  alt="Song Thumbnail"
                  className="h-28  rigin-bottom-right absolute bottom-[-178px] right-[-12px] -skew-x-12 skew-y-12"
                />
              </div>
            </div> */}
            <div className="w-full pt-[100%] relative overflow-hidden bg-blue-900 rounded-lg ">
              <div className="p-2 absolute top-0 z-10">
                <h2 className="text-2xl font-bold  text-white w-full mb-4">
                  Made For You
                </h2>
              </div>
              <div className="absolute -bottom-0 -right-5 rotate-12">
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb"
                  alt="Song Thumbnail"
                  className="w-[100px]"
                />
              </div>
            </div>
            <div className="w-full pt-[100%] relative overflow-hidden bg-blue-900 rounded-lg ">
              <div className="p-2 absolute top-0 z-10">
                <h2 className="text-2xl font-bold  text-white w-full mb-4">
                  Made For You
                </h2>
              </div>
              <div className="absolute -bottom-0 -right-5 rotate-12">
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb"
                  alt="Song Thumbnail"
                  className="w-[100px]"
                />
              </div>
            </div>
            <div className="w-full pt-[100%] relative overflow-hidden bg-blue-900 rounded-lg ">
              <div className="p-2 absolute top-0 z-10">
                <h2 className="text-2xl font-bold  text-white w-full mb-4">
                  Made For You
                </h2>
              </div>
              <div className="absolute -bottom-0 -right-5 rotate-12">
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb"
                  alt="Song Thumbnail"
                  className="w-[100px]"
                />
              </div>
            </div>
            <div className="w-full pt-[100%] relative overflow-hidden bg-blue-900 rounded-lg ">
              <div className="p-2 absolute top-0 z-10">
                <h2 className="text-2xl font-bold  text-white w-full mb-4">
                  Made For You
                </h2>
              </div>
              <div className="absolute -bottom-0 -right-5 rotate-12">
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb"
                  alt="Song Thumbnail"
                  className="w-[100px]"
                />
              </div>
            </div>
            <div className="w-full pt-[100%] relative overflow-hidden bg-blue-900 rounded-lg ">
              <div className="p-2 absolute top-0 z-10">
                <h2 className="text-2xl font-bold  text-white w-full mb-4">
                  Made For You
                </h2>
              </div>
              <div className="absolute -bottom-0 -right-5 rotate-12">
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb"
                  alt="Song Thumbnail"
                  className="w-[100px]"
                />
              </div>
            </div>
            <div className="w-full pt-[100%] relative overflow-hidden bg-blue-900 rounded-lg ">
              <div className="p-2 absolute top-0 z-10">
                <h2 className="text-2xl font-bold  text-white w-full mb-4">
                  Made For You
                </h2>
              </div>
              <div className="absolute -bottom-0 -right-5 rotate-12">
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb"
                  alt="Song Thumbnail"
                  className="w-[100px]"
                />
              </div>
            </div>
            <div className="w-full pt-[100%] relative overflow-hidden bg-blue-900 rounded-lg ">
              <div className="p-2 absolute top-0 z-10">
                <h2 className="text-2xl font-bold  text-white w-full mb-4">
                  Made For You
                </h2>
              </div>
              <div className="absolute -bottom-0 -right-5 rotate-12">
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb"
                  alt="Song Thumbnail"
                  className="w-[100px]"
                />
              </div>
            </div>
            <div className="w-full pt-[100%] relative overflow-hidden bg-blue-900 rounded-lg ">
              <div className="p-2 absolute top-0 z-10">
                <h2 className="text-2xl font-bold  text-white w-full mb-4">
                  Made For You
                </h2>
              </div>
              <div className="absolute -bottom-0 -right-5 rotate-12">
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb"
                  alt="Song Thumbnail"
                  className="w-[100px]"
                />
              </div>
            </div>
            <div className="w-full pt-[100%] relative overflow-hidden bg-blue-900 rounded-lg ">
              <div className="p-2 absolute top-0 z-10">
                <h2 className="text-2xl font-bold  text-white w-full mb-4">
                  Made For You
                </h2>
              </div>
              <div className="absolute -bottom-0 -right-5 rotate-12">
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb"
                  alt="Song Thumbnail"
                  className="w-[100px]"
                />
              </div>
            </div>
            {/* Add more search results here */}
          </div>
        </div>
      </div>
    </section>
  );
}
