import { Category } from "../category";
import { Contact } from "../contact";

export interface ITransatcionDto {
  value: string;
  formatPayment: string;
  paid: string;
  contact: Contact;
  category: Category;
  comment?: string;
}
export class TransctionDto implements ITransatcionDto {
  value: string;
  formatPayment: string;
  paid: string;
  contact: Contact;
  category: Category;
  comment?: string | undefined;

  constructor(transaction: ITransatcionDto) {
    this.value = transaction.value;
    this.formatPayment = transaction.formatPayment;
    this.category = transaction.category;
    this.comment = transaction.comment;
    this.contact = transaction.contact;
    this.paid = transaction.paid;
  }
}
