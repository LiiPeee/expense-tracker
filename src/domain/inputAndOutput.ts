import { Category } from "@prisma/client";
import { IContact } from "./entity/contact";

export type InputCreateAccount = {
  name: string;
  email: string;
  password: string;
  balance: number;
};

export type InputSignAccount = {
  email: string;
  password: string;
};

export interface CreateTransactionInput {
  email: string;
  transaction: {
    contact: any;
    installments_date?: Date;
    recurrence?: Recurrence;
    number_of_installments?: number;
    value: number;
    category: Category;
    paymentName: string;
    paid: boolean;
    comment?: string | null;
    contacts: IContact;
  }
}


export interface GetTransactionInput {
  skip: number;
  take: number;
  id: number;
  year: number;
  month: number;
}
export enum Recurrence {
  WEEK = "WEEK",
  MONTH = "MONTH",
}