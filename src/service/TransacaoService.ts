import { Transacao } from "../model/Transacao";
import { TransacaoRepository } from "../repository/TransacaoRepository";

export class TransacaoService {
    public transacaoRepository: TransacaoRepository;
    constructor(transacaoRepository: TransacaoRepository) {
        this.transacaoRepository = transacaoRepository;
        
    }
    async criandoTransacao(input: any): Promise<any> {

        const transacao = {
            id: input.id,
            valor: input.valor,
            createDate: new Date(),
            endDate: new Date(),
            comentario: input.comentario,
            formaDePagmnt: input.formaDePagmnt,
            pago: input.pago,
            contato: input.contato,
            categoria: input.categoria
        }
        if (!transacao.contato) {
            console.log("faltando")
        }

        const enviando = await this.transacaoRepository.criarTransacao(transacao);
        return enviando;

    }
}