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
  recurrence: boolean;
  number_of_installments?: number;
  installments_date?: Date;
  value: number;
  category: Category;
  formatPayment: string;
  paid: boolean;
  comment?: string | null;
  contacts: IContact[];
}
