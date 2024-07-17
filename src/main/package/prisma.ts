import { PrismaClient } from "@prisma/client";


export async function validatePrisma(): Promise<any> {
    try {
        const prisma = new PrismaClient();
        await prisma.$connect();

        console.log("Conexão com sucesso com o DB");
        return prisma;
    } catch (error: any) {
        console.log("Erro ao conectar com o banco de dados" + error)

    }
}
