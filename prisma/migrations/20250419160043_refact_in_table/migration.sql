/*
  Warnings:

  - You are about to drop the column `is_primary` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `postal_code` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `Category` table. All the data in the column will be lost.
  - Added the required column `isPrimary` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "is_primary",
DROP COLUMN "postal_code",
ADD COLUMN     "isPrimary" BOOLEAN NOT NULL,
ADD COLUMN     "postalCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "is_active",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;
