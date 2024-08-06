/*
  Warnings:

  - You are about to drop the column `precio` on the `Propiedad` table. All the data in the column will be lost.
  - Added the required column `precioUS` to the `Propiedad` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Propiedad" DROP COLUMN "precio",
ADD COLUMN     "precioUS" INTEGER NOT NULL;
