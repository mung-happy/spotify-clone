import { PrismaClient } from "@prisma/client";
import { genres } from "./seeds/genres";
import { artist } from "./seeds/artists";
import { track } from "./seeds/tracks";
const prisma = new PrismaClient();

async function main() {
  await genres();
  await artist();
  await track();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
