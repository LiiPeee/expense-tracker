import { Categoria } from "./Categoria";
import { Transacao } from "./Transacao";

export type Contato = {
    id: number;
    creatDate: Date;
    endDate: Date;
    nome: string;
    tel: string;
    transacao: Transacao[]
    categoria: Categoria
}