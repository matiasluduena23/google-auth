import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>
        Usuario no registrado en la base de datos comunicarse con los
        administradores
      </h1>
      <Link href={"/"}>Volver</Link>
    </div>
  );
}
