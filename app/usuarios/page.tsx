import prisma from "@/lib/db";
import React from "react";
import { UserTable } from "./UserTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default async function page() {
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
