/*
  Warnings:

  - You are about to drop the column `installments_date` on the `Transaction` table. All the data in the column will be lost.
  - The `recurrence` column on the `Transaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Recurrence" AS ENUM ('MONTH', 'WEEK');

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "installments_date",
DROP COLUMN "recurrence",
ADD COLUMN     "recurrence" "Recurrence" NOT NULL DEFAULT 'MONTH';
