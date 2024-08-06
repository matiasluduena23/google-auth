import { NextResponse } from "next/server";
import { Propiedad } from "@/prisma/generated/zod/index";
import fs from "fs";
import path from "node:path";
import Papa from "papaparse";
import prisma from "@/lib/db";

export async function GET() {
  const parseCSV = async (filePath: string) => {
    const csvFile = fs.readFileSync(path.resolve(filePath), "utf8");
    return new Promise((resolve) => {
      Papa.parse<Propiedad[]>(csvFile, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          resolve(results.data);
        },
      });
    });
  };

  const jsonData = await parseCSV("./data.csv");

  const dataWithT = jsonData as Propiedad[];
  const formatData = dataWithT.map((item) => {
    return {
      ...item,
      direccion: item.direccion.toString(),
      fechaDeCarga: new Date(item.fechaDeCarga),
      barrio: item.barrio.toString(),
      ciudad: item.ciudad.toString(),
      cpc: item.cpc?.toString(),
      zona: item.zona?.toString(),
      calle: item.calle?.toString(),
      altura: Number(item.altura),
      tipo: item.tipo?.toString(),
      piso: item.piso?.toString(),
      dormitorios: item.dormitorios?.toString(),
      categoria: item.categoria?.toString(),
    };
  });

  try {
    const result = await prisma.propiedad.createMany({
      data: formatData,
    });
    console.log(result);
  } catch (error) {
    if (error instanceof Error)
      console.log("Something went wrong seeding database", error.message);
    else {
      console.log("Something went wrong seeding database", error);
    }
  }

  return NextResponse.json({ data: "data" });
}
