import { Contato } from "./Contato";
import { Transacao } from "./Transacao";

export interface Categoria {
    id: number;
    createDate: Date;
    endDate: Date
    tipoDeDespesa?: string[]
}