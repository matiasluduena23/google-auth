import React from "react";
import FormCreate from "./FormCreate";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1>Crear Usuario</h1>

      <FormCreate />
    </div>
  );
}
