/*
  Warnings:

  - Made the column `lastName` on table `people` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `people` MODIFY `lastName` VARCHAR(191) NOT NULL;
