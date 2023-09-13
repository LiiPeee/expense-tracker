-- CreateTable
CREATE TABLE "Transacao" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "valor" TEXT NOT NULL,
    "comentario" TEXT,
    "formaDePagmnt" TEXT NOT NULL,
    "pago" TEXT NOT NULL,

    CONSTRAINT "Transacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "tipoDeDespesa" TEXT[],
    "contatoId" INTEGER NOT NULL,
    "transacaoId" INTEGER NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contato" (
    "id" SERIAL NOT NULL,
    "creatDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "nome" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "categoriaId" INTEGER NOT NULL,

    CONSTRAINT "Contato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContatoToTransacao" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Transacao_id_key" ON "Transacao"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_contatoId_key" ON "Categoria"("contatoId");

-- CreateIndex
CREATE UNIQUE INDEX "_ContatoToTransacao_AB_unique" ON "_ContatoToTransacao"("A", "B");

-- CreateIndex
CREATE INDEX "_ContatoToTransacao_B_index" ON "_ContatoToTransacao"("B");

-- AddForeignKey
ALTER TABLE "Categoria" ADD CONSTRAINT "Categoria_transacaoId_fkey" FOREIGN KEY ("transacaoId") REFERENCES "Transacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contato" ADD CONSTRAINT "Contato_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContatoToTransacao" ADD CONSTRAINT "_ContatoToTransacao_A_fkey" FOREIGN KEY ("A") REFERENCES "Contato"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContatoToTransacao" ADD CONSTRAINT "_ContatoToTransacao_B_fkey" FOREIGN KEY ("B") REFERENCES "Transacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;
