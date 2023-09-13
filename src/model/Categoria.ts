import { Contato } from "./Contato";
import { Transacao } from "./Transacao";

export type Categoria = {
    id: number;
    createDate: Date;
    endDate: Date
    tipoDeDespesa: string[]
    contato: Contato[]
    transacao: Transacao;
    
}