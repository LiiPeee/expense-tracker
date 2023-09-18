import { PrismaClient, Transacao } from "@prisma/client";

const prisma = new PrismaClient();

export class TransacaoRepository {
    async criarTransacao(data: any): Promise<Transacao> {
        const transacaoData: any = {
            valor: data.valor,
            comentario: data.comentario,
            formaDePagmnt: data.formaDePagmnt,
            pago: data.pago,
            contato: {
                create: {
                    nome: data.contato.nome,
                    tel: data.contato.tel,
                }
            },
            categoria: {
                create: {
                    tipoDeDespesa: data.categoria.tipoDeDespesa
                }
            }
        };
        // if (data.contato) {
        //     transacaoData.contato = {
        //         create: {
        //             nome: data.contato.nome,
        //             tel: data.contato.tel,
        //         },
        //     };
        // }
        // if (data.categoria) {
        //     transacaoData.categoria = {
        //         create: {
        //             tipoDeDespesa: data.categoria.tipoDeDespesa
        //         }
        //     }
        // }
        const criandoTransacao = await prisma.transacao.create({
            data: transacaoData,
        });

        return criandoTransacao;
    }
}
