import { Transacao } from "../model/Transacao";
import { TransacaoRepository } from "../repository/TransacaoRepository";
import { TipoLançamento } from "../model/enums/TipoLançamento";

export class TransacaoService {
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
    async pegarTransacao(input: any) {
        const enviarTransacao = await this.transacaoRepository.getTransacao(input);
        return enviarTransacao;
    }
}