import React from "react";
import FormCreate from "./FormCreate";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import { auth } from "@/auth";

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

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1>Crear Usuario</h1>

      <FormCreate />
    </div>
  );
}
