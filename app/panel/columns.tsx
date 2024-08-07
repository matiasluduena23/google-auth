"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PropiedadCol = {
  id: string;
  direccion: string;
  tipo: string | null;
  superficie: number;
  precio: number;
  categoria: string | null;
  fechaDeCarga: Date;
};

export const columns: ColumnDef<PropiedadCol>[] = [
  {
    accessorKey: "direccion",
    header: "Direccion",
  },
  {
    accessorKey: "tipo",
    header: "Tipo",
  },
  {
    accessorKey: "superficie",
    header: "Superficie",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("superficie"));

      return (
        <div>
          {amount} m<sup>2</sup>
        </div>
      );
    },
  },
  {
    accessorKey: "precio",
    header: "Precio",
    cell: ({ row }) => {
      const precio = parseFloat(row.getValue("precio"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(precio);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "categoria",
    header: "Categoria",
  },
  {
    accessorKey: "fechaDeCarga",
    header: "Fecha de Carga",
  },
];
