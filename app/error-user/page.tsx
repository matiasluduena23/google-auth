import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="max-w-sm text-center">
        Usuario no registrado en la base de datos comunicarse con los
        administradores
      </h1>
      <Button>
        <Link href={"/"}>Volver</Link>
      </Button>
    </div>
  );
}
