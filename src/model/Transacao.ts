import { Categoria } from "./Categoria";
import { Contato } from "./Contato";

export interface Transacao{
    id?: number;
    createDate?: Date;
    endDate?: Date;
    valor: string;
    comentario?: string;
    formaDePagmnt: string;
    pago: string;
    contato: Contato;
    categoria: Categoria;
}