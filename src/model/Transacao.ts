import { Categoria } from "./Categoria";
import { Contato } from "./Contato";

export type Transacao={
    id?: number;
    createDate: Date;
    endDate: Date;
    valor: String;
    comentario?: String;
    formaDePagmnt: String;
    pago: String;
    contato: Contato[];
    categoria: Categoria[]
}