/*
  Warnings:

  - You are about to drop the column `contatoId` on the `Categoria` table. All the data in the column will be lost.
  - Added the required column `contatoId` to the `Transacao` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `valor` on the `Transacao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "Categoria_contatoId_key";

-- DropIndex
DROP INDEX "Transacao_id_key";

-- AlterTable
ALTER TABLE "Categoria" DROP COLUMN "contatoId";

-- AlterTable
ALTER TABLE "Transacao" ADD COLUMN     "contatoId" INTEGER NOT NULL,
DROP COLUMN "valor",
ADD COLUMN     "valor" DECIMAL(65,30) NOT NULL;
