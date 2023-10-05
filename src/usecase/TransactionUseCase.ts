import { Transaction } from "../model/Transaction";
import { TransactionRepository } from "../repository/TransactionRepository";

export class TransactionUseCase {
  public transacaoRepository: TransactionRepository;
  constructor(transacaoRepository: TransactionRepository) {
    this.transacaoRepository = transacaoRepository;

  }
  async createTransaction(input: any): Promise<any> {

    const transacao = {
      id: input.id,
      value: input.value,
      comment: input.comment,
      formatPayment: input.formatPayment,
      paid: input.paid,
      contact: input.contact,
      category: input.category
    }
    // if (transacao.categorias.tipoTransacao == 'provento') {
    
    // } else {
    // }
    if (!transacao.contact) {
      console.log("faltando")
    }

    const enviando = await this.transacaoRepository.criarTransacao(transacao);
    return enviando;

  }
  async atualizarTransacao(input: any, data: any) {
    const { id } = input
    const atualizar = await this.transacaoRepository.atualizarTransacao(id, data);
    return atualizar;
  }
  async pegarTransacaoId(input: any) {
    const pegandoTransacao = await this.transacaoRepository.pegarTransacaoId(input);
    // if (pegandoTransacao?.id) {
    //   console.log("error")
    // }
    return pegandoTransacao;
  }
  async pegarTodasTransacoes() {
    const pegarTodasTransacoes = await this.transacaoRepository.getTodasTransacoes();

    return pegarTodasTransacoes;
  }

  async deletarTransacao(input: any) {
    await this.transacaoRepository.deletarTransacao(input);
  }
  //
}