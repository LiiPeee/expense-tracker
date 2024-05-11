import { Category } from "@prisma/client";
import { IContact } from "./entity/contact";

export type InputCreateAccount = {
  name: string;
  email: string;
  password: string;
  balance: number;
};
export interface CreateTransactionInput {
  value: number;
  category: Category
  formatPayment: string;
  paid: boolean;
  comment?: string | null;
  contacts: IContact[];
}