-- CreateEnum
CREATE TYPE "Category" AS ENUM ('RECEIVE', 'EXPENSE');

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "category" "Category" NOT NULL DEFAULT 'EXPENSE';
