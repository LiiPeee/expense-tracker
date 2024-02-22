import { TransactionRepository } from "../../domain/repository/transaction-repository";

export class TransactionUseCase {
  public transactionRepository: TransactionRepository;
  constructor(transactionRepository: TransactionRepository) {
    this.transactionRepository = transactionRepository;
  }
  async createTransaction(input: any): Promise<any> {
    const transacao = {
      id: input.id,
      value: input.value,
      comment: input.comment,
      formatPayment: input.formatPayment,
      paid: input.paid,
      contact: input.contact,
      category: input.category,
      email: input.email,
    };

    const enviando = await this.transactionRepository.createTransaction(
      transacao
    );
    return enviando;
  }
  //   async updateTransaction(input: any, data: any) {
  //     const { id } = input;
  //     const atualizar = await this.transactionRepository.updateTransaction(
  //       id,
  //       data
  //     );
  //     return atualizar;
  //   }
  //   async getTransactionById(input: any) {
  //     const pegandoTransacao =
  //       await this.transactionRepository.getTransactionById(input);
  //     // if (pegandoTransacao?.id) {
  //     //   console.log("error")
  //     // }
  //     return pegandoTransacao;
  //   }
  //   async getAllTransaction() {
  //     const pegarTodasTransacoes =
  //       await this.transactionRepository.getAllTransaction();

  //     return pegarTodasTransacoes;
  //   }

  //   async deleteTransaction(input: any) {
  //     await this.transactionRepository.deleteTransaction(input);
  //   }
  //   //
}
