import { Transacao } from "../model/Transacao";
import { TransacaoRepository } from "../repository/TransacaoRepository";
import { TipoLançamento } from "../model/enums/TipoLançamento";

export class TransacaoUsecase {
  public transacaoRepository: TransacaoRepository;
  constructor(transacaoRepository: TransacaoRepository) {
    this.transacaoRepository = transacaoRepository;

  }
  async criandoTransacao(input: any): Promise<any> {

    const transacao = {
      id: input?.id,
      valor: input?.valor,
      comentario: input?.comentario,
      formaDePagamento: input?.formaDePagamento,
      pago: input?.pago,
      contatos: input?.contatos,
      categorias: input?.categorias
    }
    if (transacao.categorias.tipoTransacao == 'provento') {
      transacao.categorias.tipoTransacao == TipoLançamento.Provento;
    } else {
      transacao.categorias.tipoTransacao == TipoLançamento.Despesa
    }
    if (!transacao.contatos) {
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