import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  const user = await prisma.user.upsert({
    where: {
      email: "matiaslredes@gmail.com",
    },
    update: {},
    create: {
      email: "matiaslredes@gmail.com",
      name: "Matias Luduena Dev",
      role: "ADMIN",
    },
  });

  console.log(`Database has been seeded. 🌱`, user);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
