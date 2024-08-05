import prisma from "@/lib/db";
import React from "react";
import { UserTable } from "./UserTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function page() {
  // Authorization
  const session = await auth();

  const email = session?.user?.email!;
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (user?.role !== "ADMIN") redirect("/panel");

  const usuarios = await prisma.user.findMany();
  return (
    <div>
      <h1>Lista de Usuarios</h1>

      <UserTable usuarios={usuarios} />
      <Button>
        <Link href={"/usuarios/nuevo"}>Agregar Usuario</Link>
      </Button>
    </div>
  );
}
