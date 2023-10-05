/*
  Warnings:

  - You are about to drop the `Categoria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Contato` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoriaToContato` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ContatoToTransacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Categoria" DROP CONSTRAINT "Categoria_transacaoId_fkey";

-- DropForeignKey
ALTER TABLE "_CategoriaToContato" DROP CONSTRAINT "_CategoriaToContato_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoriaToContato" DROP CONSTRAINT "_CategoriaToContato_B_fkey";

-- DropForeignKey
ALTER TABLE "_ContatoToTransacao" DROP CONSTRAINT "_ContatoToTransacao_A_fkey";

-- DropForeignKey
ALTER TABLE "_ContatoToTransacao" DROP CONSTRAINT "_ContatoToTransacao_B_fkey";

-- DropTable
DROP TABLE "Categoria";

-- DropTable
DROP TABLE "Contato";

-- DropTable
DROP TABLE "Transacao";

-- DropTable
DROP TABLE "_CategoriaToContato";

-- DropTable
DROP TABLE "_ContatoToTransacao";

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "paymentDate" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "value" DECIMAL(10,2) NOT NULL,
    "comment" TEXT,
    "formatPayment" TEXT NOT NULL,
    "paid" TEXT NOT NULL,
    "accountId" INTEGER NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "typeTransaction" TEXT NOT NULL,
    "recurrence" TEXT NOT NULL,
    "transacaoId" INTEGER NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "creatDate" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "phone" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContactToTransaction" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_accountId_key" ON "Transaction"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "_ContactToTransaction_AB_unique" ON "_ContactToTransaction"("A", "B");

-- CreateIndex
CREATE INDEX "_ContactToTransaction_B_index" ON "_ContactToTransaction"("B");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_transacaoId_fkey" FOREIGN KEY ("transacaoId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactToTransaction" ADD CONSTRAINT "_ContactToTransaction_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactToTransaction" ADD CONSTRAINT "_ContactToTransaction_B_fkey" FOREIGN KEY ("B") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;
