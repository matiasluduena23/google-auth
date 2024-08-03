import prisma from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const user = await prisma.user.findFirst({
    where: {
      email: "matiaslredes@gmail.com",
    },
  });
  if (!user) {
    await prisma.user.create({
      data: {
        email: "matiaslredes@gmail.com",
        name: "Matias Luduena",
        role: "ADMIN",
      },
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Pagina principal</h1>
      <Link href={"/login"} className="border p-2 rounded-lg hover:opacity-40">
        Iniciar Sesion
      </Link>
    </main>
  );
}
