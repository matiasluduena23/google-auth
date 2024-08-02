"use client";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "@prisma/client";
import { useFormState } from "react-dom";

export default function FormUpdate({ user }: { user: User }) {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(updateUser, initialState);

  return (
    <form action={dispatch} className="space-y-4">
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
        <div id="customer-error" aria-live="polite" aria-atomic="true"></div>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Nombre</Label>
        <Input
          type="name"
          id="name"
          name="name"
          placeholder="Juan Perez"
          defaultValue={user?.name ? user.name : ""}
        />
        <div id="customer-error" aria-live="polite" aria-atomic="true"></div>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="tipo">Tipo de Usuario</Label>
        <Select defaultValue={user?.role} name="tipo">
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
        <div id="customer-error" aria-live="polite" aria-atomic="true"></div>
      </div>

      <Button type="submit" className="w-full">
        Actualizar
      </Button>
    </form>
  );
}
