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
    installments_date?: Date;
    recurrence: Recurrence;
    number_of_installments?: number;
    value: number;
    category: Category;
    paymentName: string;
    paid: boolean;
    comment?: string | null;
    contact: IContact;
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
  M = "M",
  w = "W",
  D = "D",
  B = "B"
}