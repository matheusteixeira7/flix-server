/*
  Warnings:

  - The primary key for the `Plans` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `clientId` on the `Plans` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `Seller` table. All the data in the column will be lost.
  - Added the required column `plansId` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellerId` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Plans` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Plans" DROP CONSTRAINT "Plans_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Seller" DROP CONSTRAINT "Seller_clientId_fkey";

-- DropIndex
DROP INDEX "Client_id_key";

-- DropIndex
DROP INDEX "Seller_id_key";

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "plansId" TEXT NOT NULL,
ADD COLUMN     "sellerId" TEXT NOT NULL,
ADD CONSTRAINT "Client_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Plans" DROP CONSTRAINT "Plans_pkey",
DROP COLUMN "clientId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Plans_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "Seller" DROP COLUMN "clientId",
ADD CONSTRAINT "Seller_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_plansId_fkey" FOREIGN KEY ("plansId") REFERENCES "Plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
