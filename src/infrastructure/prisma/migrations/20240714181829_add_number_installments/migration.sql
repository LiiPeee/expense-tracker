/*
  Warnings:

  - Changed the type of `recurrence` on the `Transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "number_of_installments" INTEGER,
DROP COLUMN "recurrence",
ADD COLUMN     "recurrence" BOOLEAN NOT NULL;

-- DropEnum
DROP TYPE "Recurrence";
