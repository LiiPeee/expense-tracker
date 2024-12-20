import { Recurrence } from "../../inputAndOutput";

export interface ITransatcionDto {
  value?: number;
  formatPayment?: string;
  paid?: boolean;
  comment?: string;
  recurrence: Recurrence;
  category: Category;
}
export enum Category {
  RECEIVE,
  EXPENSE,
}
export class TransctionDto implements ITransatcionDto {
  value?: number;
  formatPayment?: string;
  paid?: boolean;
  recurrence: Recurrence;
  category: Category;
  comment?: string;
  number_of_installments?: number;

  constructor(transaction: ITransatcionDto) {
    this.formatPayment = transaction.formatPayment;
    this.comment = transaction.comment;
    this.paid = transaction.paid;
    this.category = transaction.category;
    this.recurrence = transaction.recurrence;
  }
}
