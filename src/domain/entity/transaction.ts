import { IAccount } from "./account";
import { IContact } from "./contact";

export interface ITransaction {
  id: string;
  createDate: Date;
  endDate: Date;
  value: string;
  formatPayment: string;
  paid: boolean;
  contact: IContact[];
  comment?: string;
  email: string;
  account: IAccount;
  typeTransaction: string;
  recurrence: string;
}
