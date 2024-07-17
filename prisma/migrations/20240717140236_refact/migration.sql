/*
  Warnings:

  - The `installments_date` column on the `Transaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "installments_date",
ADD COLUMN     "installments_date" TIMESTAMP(3);
