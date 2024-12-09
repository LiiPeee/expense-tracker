/*
  Warnings:

  - You are about to drop the `_ContactToTransaction` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `transactionId` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ContactToTransaction" DROP CONSTRAINT "_ContactToTransaction_A_fkey";

-- DropForeignKey
ALTER TABLE "_ContactToTransaction" DROP CONSTRAINT "_ContactToTransaction_B_fkey";

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "transactionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "contactId" INTEGER;

-- DropTable
DROP TABLE "_ContactToTransaction";

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;
