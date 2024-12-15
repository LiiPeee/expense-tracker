/*
  Warnings:

  - You are about to drop the column `formatPayment` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `paymentName` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "formatPayment",
ADD COLUMN     "paymentName" TEXT NOT NULL;
