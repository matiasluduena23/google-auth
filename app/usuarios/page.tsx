import prisma from "@/lib/db";
import React from "react";
import { UserTable } from "./UserTable";
export default async function page() {
  const usuarios = await prisma.user.findMany();
  return (
    <div>
      <h1>Lista de Usuarios</h1>

      <UserTable usuarios={usuarios} />
    </div>
  );
}
