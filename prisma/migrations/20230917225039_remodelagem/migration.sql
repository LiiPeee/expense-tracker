-- AlterTable
ALTER TABLE "Categoria" ALTER COLUMN "createDate" DROP NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Contato" ALTER COLUMN "creatDate" DROP NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Transacao" ALTER COLUMN "createDate" DROP NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL;