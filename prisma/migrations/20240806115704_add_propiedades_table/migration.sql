-- CreateTable
CREATE TABLE "Propiedad" (
    "id" TEXT NOT NULL,
    "idAirTable" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "fechaDeCarga" TIMESTAMP(3) NOT NULL,
    "barrio" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "cpc" TEXT,
    "zona" TEXT,
    "calle" TEXT,
    "altura" INTEGER NOT NULL,
    "tipo" TEXT,
    "superficie" INTEGER NOT NULL,
    "piso" TEXT,
    "dormitorios" TEXT,
    "categoria" TEXT,
    "precio" INTEGER NOT NULL,
    "latitud" INTEGER NOT NULL,
    "longitud" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Propiedad_id_key" ON "Propiedad"("id");
