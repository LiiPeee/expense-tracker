import { ICategory } from "../dto/category";
import { Recurrence } from "../dto/transaction";
import { GetTransactionInput } from "../inputAndOutput";
import { Transaction } from "../models/entities/transaction";

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

    abstract create(email: string, transaction: Transaction): Promise<any>;

    abstract getTransactionByContact(input: any): Promise<any>;
}
