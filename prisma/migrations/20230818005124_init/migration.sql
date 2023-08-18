/*
  Warnings:

  - You are about to drop the column `balance` on the `people` table. All the data in the column will be lost.
  - Added the required column `balanceMonth` to the `People` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthDate` to the `People` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `people` DROP COLUMN `balance`,
    ADD COLUMN `balanceMonth` INTEGER NOT NULL,
    ADD COLUMN `birthDate` DATETIME(3) NOT NULL;
