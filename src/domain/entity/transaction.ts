import { Account } from "../models/entities/account";
import { IContact } from "./contact";
import { IEntityBase } from "./entity";

export interface ITransaction extends IEntityBase {

  value: string;
  formatPayment: string;
  paid: boolean;
  contact: IContact[];
  comment?: string;
  email: string;
  account: Account;
  typeTransaction: string;
  recurrence: string;
}
