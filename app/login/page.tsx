import React from "react";
import { SignIn } from "../components/SignInForm";

export default async function page() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1>Iniciar Sesion</h1>
      <SignIn />
    </div>
  );
}
