import { Category } from "./create-transaction-dto";

export interface IGetTransactionDto {
    createDate: string;
    value: number;
    formatPayment: string;
    paid: boolean;
    comment: string | null;
    recurrence: boolean;
    installments_date?: string | null;
    number_of_installments: number;
    category: Category

}

export class GetTransactionDto implements IGetTransactionDto {

    createDate: string;
    value: number;
    formatPayment: string;
    paid: boolean;
    comment: string | null;
    recurrence: boolean;
    installments_date?: string | null;
    number_of_installments: number;
    category: Category;


    constructor(transaction: IGetTransactionDto) {
        this.createDate = transaction.createDate;
        this.value = transaction.value;
        this.formatPayment = transaction.formatPayment;
        this.paid = transaction.paid;
        this.comment = transaction?.comment;
        this.recurrence = transaction.recurrence;
        this.installments_date = transaction.installments_date;
        this.number_of_installments = transaction.number_of_installments;
        this.category = transaction.category;
    }
}
