import { PrismaClient, Transacao } from "@prisma/client";

const prisma = new PrismaClient();

export class TransacaoRepository {
    async criarTransacao(data: any): Promise<Transacao> {
        const transacaoData: any = {
            valor: data?.valor,
            comentario: data?.comentario,
            formaDePagamento: data?.formaDePagamento,
            pago: data?.pago,
            contatos: {
                create: {
                    nome: data.contatos?.nome,
                    tel: data.contatos?.tel,
                }
            },
            categorias: {
                create: {
                    tipoDeLancamento: data.categorias?.tipoDeLancamento
                }
            }
        };
        const criandoTransacao = await prisma.transacao.create({
            data: transacaoData,
        });

        return criandoTransacao;
    }
    async getTransacao(input: any) {
        const { id } = input;
        const pegarTransacao = await prisma.transacao.findFirst({
            where: {
                id: parseInt(id),
            }, include: { categorias: true }
        })
        return pegarTransacao;
    }
}
