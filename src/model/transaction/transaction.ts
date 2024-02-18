import { Category } from "../category";
import { Contact } from "../contact";

export class Transaction {
  constructor(
    public id: number,
    public createDate: Date,
    public endDate: Date,
    public value: string,
    public formatPayment: string,
    public paid: string,
    public contact: Contact,
    public category: Category,
    public comment?: string
  ) {}
}
