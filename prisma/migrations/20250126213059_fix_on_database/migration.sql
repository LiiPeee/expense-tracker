/*
  Warnings:

  - The values [MONTH,WEEK] on the enum `Recurrence` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `accountId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Recurrence_new" AS ENUM ('W', 'M', 'D', 'B');
ALTER TABLE "Transaction" ALTER COLUMN "recurrence" DROP DEFAULT;
ALTER TABLE "Transaction" ALTER COLUMN "recurrence" TYPE "Recurrence_new" USING ("recurrence"::text::"Recurrence_new");
ALTER TYPE "Recurrence" RENAME TO "Recurrence_old";
ALTER TYPE "Recurrence_new" RENAME TO "Recurrence";
DROP TYPE "Recurrence_old";
ALTER TABLE "Transaction" ALTER COLUMN "recurrence" SET DEFAULT 'M';
COMMIT;

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_accountId_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "accountId",
DROP COLUMN "category",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ALTER COLUMN "recurrence" SET DEFAULT 'M';

-- DropEnum
DROP TYPE "Category";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
