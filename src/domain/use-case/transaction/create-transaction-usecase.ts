import { IAccount } from '../../entity/account';
import { ICategory } from '../../entity/category';
import { IContact } from '../../entity/contact';
import { ITransaction, Recurrence } from '../../entity/transaction';
import { IUseCase } from '../usecase';

export interface CreateTransactionInput {
  account: IAccount
  email: string;
  installments_date?: Date;
  recurrence: Recurrence;
  number_of_installments?: number;
  value: number;
  category: ICategory;
  paymentName: string;
  paid: boolean;
  comment?: string;
  contact: IContact;
}
export type CreateTransactionOutPut = { transaction: ITransaction };

export abstract class ICreateTransactionUseCase implements IUseCase<CreateTransactionInput, CreateTransactionOutPut> {

  abstract execute(input: CreateTransactionInput): Promise<CreateTransactionOutPut>
}