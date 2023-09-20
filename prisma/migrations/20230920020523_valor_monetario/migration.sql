/*
  Warnings:

  - You are about to drop the column `tipoDeDespesa` on the `Categoria` table. All the data in the column will be lost.
  - You are about to drop the column `formaDePagmnt` on the `Transacao` table. All the data in the column will be lost.
  - Added the required column `recorrencia` to the `Categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoTransacao` to the `Categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formaDePagamento` to the `Transacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Categoria" DROP COLUMN "tipoDeDespesa",
ADD COLUMN     "recorrencia" TEXT NOT NULL,
ADD COLUMN     "tipoTransacao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Transacao" DROP COLUMN "formaDePagmnt",
ADD COLUMN     "formaDePagamento" TEXT NOT NULL;
