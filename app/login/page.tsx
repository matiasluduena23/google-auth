import React from "react";
import { SignIn } from "../components/SignInForm";
import { SignOut } from "../components/LogOut";
import { auth } from "@/auth";

export default async function page() {
  const session = await auth();

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      {session && <p>{session.user?.name}</p>}

      <h1>Iniciar Sesion</h1>
      <SignIn />
      <SignOut />
    </div>
  );
}
