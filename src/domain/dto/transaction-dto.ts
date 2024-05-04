import { IContact } from "../entity/contact";

export interface ITransatcionDto {
  value: string;
  formatPayment: string;
  paid: string;
  contact: IContact;
  comment?: string;
}
export class TransctionDto implements ITransatcionDto {
  value: string;
  formatPayment: string;
  paid: string;
  contact: IContact;
  comment?: string | undefined;

  constructor(transaction: ITransatcionDto) {
    this.value = transaction.value;
    this.formatPayment = transaction.formatPayment;
    this.comment = transaction.comment;
    this.contact = transaction.contact;
    this.paid = transaction.paid;
  }
}
