/*
  Warnings:

  - Made the column `password` on table `Account` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "token" TEXT,
ALTER COLUMN "password" SET NOT NULL;
