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
import { createUser } from "@/lib/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormCreate() {
  return (
    <form action={createUser} className="space-y-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Correo</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="matias@gmail.com"
          required
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Nombre</Label>
        <Input
          type="name"
          id="name"
          name="name"
          placeholder="Juan Perez"
          required
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="tipo">Tipo de Usuario</Label>
        <Select name="tipo" defaultValue="USER">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="USER">Cliente</SelectItem>
              <SelectItem value="ADMIN">Administrador</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">
        Crear
      </Button>
    </form>
  );
}
