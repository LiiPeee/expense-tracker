import { Recurrence } from "../../inputAndOutput";
import { Category } from "../entities/transaction";

export interface IGetTransactionDto {
    createDate: string;
    value: number;
    formatPayment: string;
    paid: boolean;
    comment: string | null;
    recurrence: Recurrence;
    number_of_installments: number;
    category: Category

}

export class GetTransactionDto implements IGetTransactionDto {

    createDate: string;
    value: number;
    formatPayment: string;
    paid: boolean;
    comment: string | null;
    recurrence: Recurrence;
    number_of_installments: number;
    category: Category;


    constructor(transaction: IGetTransactionDto) {
        this.createDate = transaction.createDate;
        this.value = transaction.value;
        this.formatPayment = transaction.formatPayment;
        this.paid = transaction.paid;
        this.comment = transaction?.comment;
        this.recurrence = transaction.recurrence;
        this.number_of_installments = transaction.number_of_installments;
        this.category = transaction.category;
    }
}
