import prisma from "@/lib/db";
import React from "react";
import FormUpdate from "./FormUpdate";

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const user = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      {user ? <FormUpdate user={user} /> : <p>No se encontro el usuario</p>}
    </div>
  );
}
