import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function user() {
  const currentDate = new Date();

  const accounts = [{ username: "Admin", email: "admin@lie.vggate.com" }];

  //   accounts.forEach(async account => {
  //     await prisma.user.create({
  //       data: {
  //         username: account.username,
  //         email: account.email,
  //         password: hashedPassword,
  //         first_name: '',
  //         last_name: '',
  //         is_active: 1,
  //         is_staff: 1,
  //         verified: 1,
  //         is_superuser: 1,
  //         last_login: currentDate,
  //         date_joined: currentDate,
  //       },
  //     });
  //   });
}

export { user };
