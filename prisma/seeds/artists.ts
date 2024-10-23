import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const artist = async () => {
  const artists = [
    {
      id: 1,
      name: "Rhymastic",
      thumbnail:
        "https://i.scdn.co/image/ab6761610000f1780e62e694576ab6f8e56db3d8",
      banner:
        "https://media-cdn-v2.laodong.vn/storage/newsportal/2021/4/15/899059/125805966_1021439547.jpg?w=526&h=314&crop=auto&scale=both",
      popularity: 170,
      type: "artist",
      slug: "rhymastic",
      create_at: "2024-10-12 05:56:07",
      update_at: "2024-10-12 05:56:07",
    },
    {
      id: 2,
      name: "W/n",
      thumbnail:
        "https://i.scdn.co/image/ab67616100005174316c0f0bc6cf3a29c203ab1e",
      banner:
        "https://i.scdn.co/image/ab67616d0000b273a15366a748db8fcede2a152d",
      popularity: 80,
      type: "artist",
      slug: "w-n",
      create_at: "2024-10-12 05:56:52",
      update_at: "2024-10-12 05:56:52",
    },
    {
      id: 3,
      name: "Sơn Tùng MTP",
      thumbnail:
        "https://i.scdn.co/image/ab676161000051747afc6ecdb9102abd1e10d338",
      banner: "https://i.ytimg.com/vi/zoEtcR5EW08/maxresdefault.jpg",
      popularity: 200,
      type: "artist",
      slug: "son-tung-mtp",
      create_at: "2024-10-12 05:57:37",
      update_at: "2024-10-12 05:57:37",
    },
    {
      id: 4,
      name: "Charlie Puth",
      thumbnail:
        "https://i.scdn.co/image/ab67616100005174f83823555da55fd07555fbd0",
      banner:
        "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84e5045d3b49d94dfbada1b0ea",
      popularity: 220,
      type: "artist",
      slug: "charlie-puth",
      create_at: "2024-10-12 05:58:22",
      update_at: "2024-10-12 05:58:22",
    },
    {
      id: 5,
      name: "Taylor Swift",
      thumbnail:
        "https://i.scdn.co/image/ab67616100005174e672b5f553298dcdccb0e676",
      banner:
        "https://jambroadcasting.com/wp-content/uploads/2024/04/316092-taylor-swift-sets-new-spotify-records-as-patti-smith-post-malone-send-their-thanks.jpg",
      popularity: 110,
      type: "artist",
      slug: "taylor-swift",
      create_at: "2024-10-12 05:59:07",
      update_at: "2024-10-12 05:59:07",
    },
    {
      id: 6,
      name: "TONES AND I",
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e02c6f7af36ecdc3ed6e0a1f169",
      banner:
        "https://content.api.news/v3/images/bin/87b75c70080d33b5b43ca8a631a79f18",
      popularity: 70,
      type: "artist",
      slug: "tones-and-i",
      create_at: "2024-10-12 05:59:52",
      update_at: "2024-10-12 05:59:52",
    },
    {
      id: 7,
      name: "Céline Dion",
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e02def7146ca744f3b1bf838404",
      banner:
        "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2RkFc4-default.jpg",
      popularity: 140,
      type: "artist",
      slug: "celine-dion",
      create_at: "2024-10-12 06:00:37",
      update_at: "2024-10-12 06:00:37",
    },
    {
      id: 8,
      name: "Westlife",
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b2731d78472931a3c47d66444ee4",
      banner:
        "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3wM6bu-default.jpg",
      popularity: 70,
      type: "artist",
      slug: "westlife",
      create_at: "2024-10-12 06:01:22",
      update_at: "2024-10-12 06:01:22",
    },
    {
      id: 9,
      name: "George Benson",
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e02e71efa8c6cfc1f8b39b0bdab",
      banner:
        "https://i.scdn.co/image/ab67616d0000b273f29e14e8fd0ccec63bd30ad1",
      popularity: 90,
      type: "artist",
      slug: "george-benson",
      create_at: "2024-10-12 06:02:07",
      update_at: "2024-10-12 06:02:07",
    },
    {
      id: 10,
      name: "Ed Sheeran",
      thumbnail:
        "https://i.scdn.co/image/ab6761610000f1783bcef85e105dfc42399ef0ba",
      banner:
        "https://inmusicblog.com/wp-content/uploads/2024/02/209eed14-423f-41ba-af1e-e70000f81f94.jpeg?w=1024",
      popularity: 100,
      type: "artist",
      slug: "ed-sheeran",
      create_at: "2024-10-12 06:02:52",
      update_at: "2024-10-12 06:02:52",
    },
    {
      id: 11,
      name: "Justatee",
      thumbnail:
        "https://i.scdn.co/image/ab67616100005174de3d3210433dd11c07678420",
      banner:
        "https://i.scdn.co/image/ab67616d0000b273970ac7dca1ea5293c4aaa72a",
      popularity: 150,
      type: "artist",
      slug: "justatee",
      create_at: "2024-10-12 06:03:37",
      update_at: "2024-10-12 06:03:37",
    },
    {
      id: 12,
      name: "Mr.T",
      thumbnail:
        "https://i.scdn.co/image/ab67616100005174ec0a3c468e866451cd75c7d6",
      banner:
        "https://i.scdn.co/image/ab67616d00001e02b21f3b4a01482a1acac7f73a",
      popularity: 180,
      type: "artist",
      slug: "mr-t",
      create_at: "2024-10-12 06:04:22",
      update_at: "2024-10-12 06:04:22",
    },
    {
      id: 13,
      name: "Vũ",
      thumbnail:
        "https://i.scdn.co/image/ab6761700000c52cf45993bcf094ef3de61f25bc",
      banner:
        "https://i1.sndcdn.com/artworks-xDHtqYMa0uqnTxdP-z5FFkQ-t500x500.jpg",
      popularity: 250,
      type: "artist",
      slug: "vu",
      create_at: "2024-10-12 06:05:07",
      update_at: "2024-10-12 06:05:07",
    },
    {
      id: 14,
      name: "Hà Anh Tuấn",
      thumbnail:
        "https://i.scdn.co/image/ab6761700000c52cf45993bcf094ef3de61f25bc",
      banner:
        "https://i.scdn.co/image/ab67616d00001e029f1b369ada752a358c9bc157",
      popularity: 190,
      type: "artist",
      slug: "ha-anh-tuan",
      create_at: "2024-10-12 06:05:52",
      update_at: "2024-10-12 06:05:52",
    },
    {
      id: 15,
      name: "Phan Mạnh Quỳnh",
      thumbnail:
        "https://i.scdn.co/image/ab6761700000c52cf705818b1bb42a50897669df",
      banner: "https://i.ytimg.com/vi/Xh0YQp9odv4/maxresdefault.jpg",
      popularity: 200,
      type: "artist",
      slug: "phan-manh-quynh",
      create_at: "2024-10-12 06:06:37",
      update_at: "2024-10-12 06:06:37",
    },
    {
      id: 16,
      name: "Only C",
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e022103bdcdf1d4369f212b6862",
      banner:
        "https://i.scdn.co/image/ab6761610000e5ebcbc6b072aec429273fdbd53b",
      popularity: 170,
      type: "artist",
      slug: "only-c",
      create_at: "2024-10-12 06:07:22",
      update_at: "2024-10-12 06:07:22",
    },
    {
      id: 17,
      name: "Binz",
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e022103bdcdf1d4369f212b6862",
      banner:
        "https://i.scdn.co/image/ab6761610000e5ebcbc6b072aec429273fdbd53b",
      popularity: 180,
      type: "artist",
      slug: "binz",
      create_at: "2024-10-12 06:08:07",
      update_at: "2024-10-12 06:08:07",
    },
    {
      id: 18,
      name: "Min",
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e02674b39e6964b8b27986d7fd5",
      banner:
        "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84eba4d90a58e2959db2b52835",
      popularity: 120,
      type: "artist",
      slug: "min",
      create_at: "2024-10-12 06:08:52",
      update_at: "2024-10-12 06:08:52",
    },
  ];

  artists.forEach(async (artist) => {
    await prisma.artists.create({
      data: {
        id: artist.id,
        name: artist.name,
        thumbnail: artist.thumbnail,
        banner: artist.banner,
        popularity: artist.popularity,
        type: artist.type,
        slug: artist.slug,
        create_at: artist.create_at,
        update_at: artist.update_at,
      },
    });
  });
};
