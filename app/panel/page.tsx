import { auth } from "@/auth";
import prisma from "@/lib/db";

import Link from "next/link";
import React from "react";
import { SignOut } from "../components/SignOut";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { TablePropiedades } from "./TablePropiedades";
import { columns, PropiedadCol } from "./columns";

export default async function page() {
  const session = await auth();
  if (!session) redirect("/error-user");

  const user = await prisma.user.findFirst({
    where: {
      email: session.user?.email!,
    },
  });

  const propiedades = await prisma.propiedad.findMany();
  const formatPropiedades: PropiedadCol[] = propiedades.map((item) => ({
    id: item.id,
    categoria: item.categoria,
    direccion: item.direccion,
    fechaDeCarga: item.fechaDeCarga,
    precio: item.precioUS,
    superficie: item.superficie,
    tipo: item.tipo,
  }));

  return (
    <section>
      <div className="space-y-2">
        <p>{user?.email}</p>
        <p>{user?.name}</p>

        {user?.role === "ADMIN" && (
          <Button>
            <Link href={"/usuarios"}>Usuarios</Link>
          </Button>
        )}

        <SignOut />
      </div>
      <h1 className="text-center text-4xl">Panel</h1>
      <TablePropiedades columns={columns} data={formatPropiedades} />
    </section>
  );
}
