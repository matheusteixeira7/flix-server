/*
  Warnings:

  - You are about to drop the column `plansId` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `sellerId` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the `Plans` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Seller` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_plansId_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_sellerId_fkey";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "plansId",
DROP COLUMN "sellerId";

-- DropTable
DROP TABLE "Plans";

-- DropTable
DROP TABLE "Seller";
