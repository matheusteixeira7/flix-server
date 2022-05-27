-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "phone1" TEXT NOT NULL,
    "phone2" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Seller" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "clientId" TEXT
);

-- CreateTable
CREATE TABLE "Plans" (
    "internet" TEXT NOT NULL,
    "tv" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "clientId" TEXT,

    CONSTRAINT "Plans_pkey" PRIMARY KEY ("internet")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_id_key" ON "Client"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Seller_id_key" ON "Seller"("id");

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plans" ADD CONSTRAINT "Plans_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
