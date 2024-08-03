import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  const user = await prisma.user.findFirst({
    where: {
      email: "matiaslredes@gmail.com",
    },
  });
  if (!user) {
    const InsertUser = await prisma.user.create({
      data: {
        email: "matiaslredes@gmail.com",
        name: "Matias Luduena Dev",
        role: "ADMIN",
      },
    });
    console.log(`Database has been seeded. 🌱`, InsertUser);
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
