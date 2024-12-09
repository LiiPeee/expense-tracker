import { CreateTransactionInput, GetTransactionInput, Recurrence } from "../inputAndOutput";
import { Category } from "../models/dto/create-transaction-dto";

export interface CreateTransaction {
    value?: number;
    formatPayment?: string;
    paid?: boolean;
    recurrence: Recurrence;
    category: Category;
    comment?: string;
    number_of_installments?: number;
}

export abstract class ITransactionRepository {
    abstract getByMonth(input: GetTransactionInput): Promise<any>;

    abstract create(email: string, input: CreateTransactionInput): Promise<CreateTransaction>;
}
