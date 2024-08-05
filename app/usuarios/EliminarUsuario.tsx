import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { eliminarUser } from "@/lib/actions";
import React from "react";

export default function EliminarUsuario({ id }: { id: string }) {
  return (
    <form action={eliminarUser}>
      <Input type="hidden" name="id" value={id} />
      <Button variant={"destructive"}>Eliminar</Button>
    </form>
  );
}
