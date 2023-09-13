import { PrismaClient } from "@prisma/client";
import { Transacao } from "../model/Transacao";
const prisma = new PrismaClient();
export class TransacaoRepository{

    async criarTransacao(data: Transacao): Promise<Transacao>{

        const createTransaction = await prisma.transacao

    }
}