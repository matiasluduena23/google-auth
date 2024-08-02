import prisma from "@/lib/db";
import React from "react";

export default async function page() {
  const usuarios = await prisma.user.findMany();
  return <div></div>;
}
