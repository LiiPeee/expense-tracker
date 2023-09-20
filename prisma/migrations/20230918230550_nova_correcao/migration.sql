/*
  Warnings:

  - You are about to alter the column `valor` on the `Transacao` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Transacao" ALTER COLUMN "valor" SET DATA TYPE INTEGER;
