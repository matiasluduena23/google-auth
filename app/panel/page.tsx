import { auth } from "@/auth";
import prisma from "@/lib/db";

import Link from "next/link";
import React from "react";
import { SignOut } from "../components/SignOut";

export default async function page() {
  const session = await auth();
  if (!session) return null;
  if (!session.user) return;
  if (!session.user?.email) return;

  const user = await prisma.user.findFirst({
    where: {
      email: session.user.email,
    },
  });

  return (
    <div>
      <h1>Panel</h1>

      <div>
        <p>{user?.email}</p>
        <p>{user?.name}</p>
        <img src={user?.image!} alt="Profile" />
        {user?.role === "ADMIN" && (
          <Link
            href={"/usuarios"}
            className="border p-2 rounded-lg hover:opacity-40"
          >
            Usuarios
          </Link>
        )}

        <SignOut />
      </div>
    </div>
  );
}
