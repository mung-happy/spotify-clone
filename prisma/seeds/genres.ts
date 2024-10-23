import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const genres = async () => {
  const genres = [
    {
      id: 1,
      name: "Love",
      thumbnail:
        "https://i.scdn.co/image/ab67fb8200005cafb03c6f8e7efca2ae36f41b31",
      color_bg: "rgb(230, 30, 50)",
      slug: "love",
      create_at: "2024-10-12 07:24:33",
      update_at: "2024-10-12 07:24:33",
    },
    {
      id: 2,
      name: "Chill",
      thumbnail:
        "https://i.scdn.co/image/ab67fb8200005caf47e942f5bea637f4f4760170",
      color_bg: "rgb(216, 64, 0)",
      slug: "chill",
      create_at: "2024-10-12 07:25:05",
      update_at: "2024-10-12 07:25:05",
    },
    {
      id: 3,
      name: "At Home",
      thumbnail:
        "https://i.scdn.co/image/ab67fb8200005cafe914a07d20cec7a65e2e5dad",
      color_bg: "rgb(81, 121, 161)",
      slug: "at-home",
      create_at: "2024-10-12 07:25:37",
      update_at: "2024-10-12 07:25:37",
    },
    {
      id: 4,
      name: "Sleep",
      thumbnail:
        "https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0",
      color_bg: "rgb(30, 50, 100)",
      slug: "sleep",
      create_at: "2024-10-12 07:26:09",
      update_at: "2024-10-12 07:26:09",
    },
    {
      id: 5,
      name: "R&B",
      thumbnail:
        "https://i.scdn.co/image/ab67fb8200005caff4e38be86ca48a3b10884ae3",
      color_bg: "rgb(186, 93, 7)",
      slug: "r-b",
      create_at: "2024-10-12 07:26:41",
      update_at: "2024-10-12 07:26:41",
    },
    {
      id: 6,
      name: "Party",
      thumbnail:
        "https://i.scdn.co/image/ab67fb8200005cafcbf80f8ea695536eace4fd2c",
      color_bg: "rgb(83, 122, 161)",
      slug: "party",
      create_at: "2024-10-12 07:27:13",
      update_at: "2024-10-12 07:27:13",
    },
    {
      id: 7,
      name: "Hip-Hop",
      thumbnail:
        "https://i.scdn.co/image/ab67fb8200005caf9e3dea60be755ccd97b7351f",
      color_bg: "rgb(80, 55, 80)",
      slug: "hip-hop",
      create_at: "2024-10-12 07:27:45",
      update_at: "2024-10-12 07:27:45",
    },
  ];

  genres.forEach(async (genre) => {
    await prisma.genres.create({
      data: {
        id: genre.id,
        name: genre.name,
        thumbnail: genre.thumbnail,
        color_bg: genre.color_bg,
        slug: genre.slug,
        create_at: genre.create_at,
        update_at: genre.update_at,
      },
    });
  });
};
