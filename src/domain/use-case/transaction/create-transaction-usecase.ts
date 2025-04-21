import { ITransaction, Recurrence } from '../../entity/transaction';
import { IUseCase } from '../usecase';

export interface CreateTransactionInput {
  account: { name: string };
  email: string;
  installments_date: Date;
  recurrence: Recurrence;
  number_of_installments: number;
  value: number;
  category: { name: string };
  paymentName: string;
  paid: boolean;
  comment?: string;
  contact: { email: string };
}
export type CreateTransactionOutPut = { transaction: ITransaction };

export abstract class ICreateTransactionUseCase implements IUseCase<CreateTransactionInput, CreateTransactionOutPut> {
  abstract execute(input: CreateTransactionInput): Promise<CreateTransactionOutPut>;
}
