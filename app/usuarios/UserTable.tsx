import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { User } from "@prisma/client";
import Link from "next/link";

export function UserTable({ usuarios }: { usuarios: User[] }) {
  return (
    <Table>
      <TableCaption>Lista de usuarios</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Correo</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Tipo de Usuario</TableHead>
          <TableHead className="text-right">Visitas</TableHead>
          <TableHead className="text-right">Actualizar</TableHead>
          <TableHead className="text-right">Eliminar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {usuarios.map((usuario) => (
          <TableRow key={usuario.id}>
            <TableCell className="font-medium">{usuario.email}</TableCell>
            <TableCell>{usuario.name}</TableCell>
            <TableCell>{usuario.role}</TableCell>
            <TableCell className="text-right">{usuario.visitas}</TableCell>
            <TableCell className="text-right">
              <Button variant={"secondary"}>
                <Link href={`/usuarios/${usuario.id}/actualizar`}>
                  Actualizar
                </Link>
              </Button>
            </TableCell>
            <TableCell className="text-right">
              <Button variant={"destructive"}>
                <Link href={`/panel/${usuario.id}/actualizar`}>Eliminar</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
}
