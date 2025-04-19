import { IAccount } from "./account";
import { ICategory } from "./category";
import { IContact } from "./contact";

export interface ITransaction {
  account: IAccount;
  value: number;
  paymentName: string;
  paid: boolean;
  comment?: string;
  recurrence: Recurrence;
  category: ICategory;
  contact: IContact;
  number_of_installments: number;
  installments_date: Date;
}

export enum Recurrence {
  M = "M",
  w = "W",
  D = "D",
  B = "B",
}
