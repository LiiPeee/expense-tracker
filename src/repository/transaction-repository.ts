import { Transaction } from "../model/transaction";

export class TransactionRepository {
  async createTransaction(data: any): Promise<Transaction> {
    const transacaoData: any = {
      value: data?.valor,
      comentario: data?.comentario,
      formaDePagamento: data?.formaDePagamento,
      pago: data?.pago,
      contatos: {
        create: {
          nome: data.contatos?.nome,
          tel: data.contatos?.tel,
        },
      },
      categorias: {
        create: {
          tipoTransacao: data.categorias?.tipoTransacao,
          recorrencia: data.categorias?.recorrencia,
        },
      },
    };
    const criandoTransacao = await prisma.transaction.create({
      data: transacaoData,
      include: {
        category: true,
      },
    });

    return criandoTransacao;
  }
  async getTransactionById(input: any) {
    const { id } = input;
    const pegarTransacao = await prisma.transaction.findFirst({
      where: {
        id: parseInt(id),
      },
      include: { category: true },
    });
    return pegarTransacao;
  }
  async getAllTransaction() {
    const pegarTodasTransacoes = await prisma.transaction.findMany();
    return pegarTodasTransacoes;
  }
  async updateTransaction(inputId: any, input: any) {
    const { id } = inputId;
    const pegarTransacao = await prisma.transaction.findFirst({
      where: {
        id: parseInt(id),
      },
    });
    if (pegarTransacao) {
      const atualizarTransacao = await prisma.transaction.update({
        where: {
          id: parseInt(id),
        },
        data: {
          value: input?.value,
          paid: input?.paid,
          comment: input?.comment,
          formatPayment: input?.formatPayment,
        },
      });
      return atualizarTransacao;
    }
  }
  async deleteTransaction(input: any): Promise<any> {
    const { id } = input;
    const deletar = await prisma.transaction.delete({
      where: {
        id: parseInt(id),
      },
      include: {
        category: true,
        contact: true,
      },
    });
    return deletar;
  }
}
