import prisma from "@/lib/db";
import React from "react";
import FormUpdate from "./FormUpdate";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function page({ params }: { params: { id: string } }) {
  // Authorization
  const session = await auth();
  const emailSession = session?.user?.email!;
  const userSession = await prisma.user.findFirst({
    where: {
      email: emailSession,
    },
  });
  if (userSession?.role !== "ADMIN") redirect("/panel");

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
