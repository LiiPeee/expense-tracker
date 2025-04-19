/*
  Warnings:

  - A unique constraint covering the columns `[document]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `addressId` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_active` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TypeCategory" AS ENUM ('expense', 'income');

-- CreateEnum
CREATE TYPE "TypeContact" AS ENUM ('individual', 'company');

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "type" "TypeCategory" NOT NULL DEFAULT 'expense';

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "addressId" INTEGER NOT NULL,
ADD COLUMN     "document" TEXT NOT NULL,
ADD COLUMN     "is_active" BOOLEAN NOT NULL,
ADD COLUMN     "type" "TypeContact" NOT NULL DEFAULT 'individual';

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "complement" TEXT,
    "is_primary" BOOLEAN NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contact_document_key" ON "Contact"("document");

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
