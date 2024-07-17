import { Category } from "../dto/transaction-dto";
import { CreateTransactionInput } from "../inputAndOutput";

export interface CreateTransaction {
    value?: number;
    formatPayment?: string;
    paid?: boolean;
    recurrence: boolean;
    category: Category;
    comment?: string;
    number_of_installments?: number;
}

export abstract class ITransactionRepository {
    abstract update(email: string, data: any): Promise<any>;
    abstract getByMonth(id: number, month: number, year: number): Promise<any>;

    abstract get(input: string): Promise<any>;

    abstract getMany(input: any): Promise<any>;

    abstract create(email: string, input: CreateTransactionInput): Promise<CreateTransaction>;
}
