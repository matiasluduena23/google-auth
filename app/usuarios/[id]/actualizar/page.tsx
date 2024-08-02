import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import prisma from "@/lib/db";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { updateUser } from "@/lib/actions";

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const user = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form action={updateUser} className="space-y-4">
        <input type="hidden" name="id" value={user?.id} />
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Correo</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="matias@gmail.com"
            defaultValue={user?.email}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Nombre</Label>
          <Input
            type="name"
            id="name"
            name="name
            "
            placeholder="Juan Perez"
            defaultValue={user?.name ? user.name : ""}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="tipo">Tipo de Usuario</Label>
          <Select defaultValue={user?.role} name="tipo">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="USER">Usuario</SelectItem>
                <SelectItem value="ADMIN">Administrador</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full">
          Actualizar
        </Button>
      </form>
    </div>
  );
}
