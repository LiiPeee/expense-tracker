import { ITransaction, Recurrence } from "../../entity/transaction";
import { IUseCase } from "../usecase";

export interface CreateTransactionInput {
  account: { accountId: number };
  email: string;
  installments_date: Date;
  recurrence: Recurrence;
  number_of_installments: number;
  value: number;
  category: { categoryId: number };
  paymentName: string;
  paid: boolean;
  comment?: string;
  contact: { name: string };
}
export type CreateTransactionOutPut = { transaction: ITransaction };

export abstract class ICreateTransactionUseCase implements IUseCase<CreateTransactionInput, CreateTransactionOutPut> {
  abstract execute(input: CreateTransactionInput): Promise<CreateTransactionOutPut>;
}
