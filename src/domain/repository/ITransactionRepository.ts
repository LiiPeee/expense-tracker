import { ICategory } from "../entity/category";
import { ITransaction, Recurrence } from "../entity/transaction";
import { GetTransactionInput } from "../inputAndOutput";

export interface CreateTransaction {
    value?: number;
    formatPayment?: string;
    paid?: boolean;
    recurrence: Recurrence;
    category: ICategory;
    comment?: string;
    number_of_installments?: number;
}

export abstract class ITransactionRepository {
    abstract getByMonth(input: GetTransactionInput): Promise<any>;

    abstract create(input: ITransaction): Promise<any>;

    abstract getTransactionByContact(input: any): Promise<any>;
}
