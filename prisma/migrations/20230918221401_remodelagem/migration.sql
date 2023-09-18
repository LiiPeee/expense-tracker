-- DropForeignKey
ALTER TABLE "Contato" DROP CONSTRAINT "Contato_categoriaId_fkey";

-- CreateTable
CREATE TABLE "_CategoriaToContato" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoriaToContato_AB_unique" ON "_CategoriaToContato"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoriaToContato_B_index" ON "_CategoriaToContato"("B");

-- AddForeignKey
ALTER TABLE "_CategoriaToContato" ADD CONSTRAINT "_CategoriaToContato_A_fkey" FOREIGN KEY ("A") REFERENCES "Categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriaToContato" ADD CONSTRAINT "_CategoriaToContato_B_fkey" FOREIGN KEY ("B") REFERENCES "Contato"("id") ON DELETE CASCADE ON UPDATE CASCADE;
