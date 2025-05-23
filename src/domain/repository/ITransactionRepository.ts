import { ITransaction } from '../entity/transaction';
import { GetTransactionByMonthInput } from '../use-case/transaction/get-transaction-by-month-usecase';

export abstract class ITransactionRepository {
  abstract getByMonth(input: GetTransactionByMonthInput): Promise<any>;

  abstract create(input: ITransaction): Promise<any>;

  abstract paidTransaction(id: string): Promise<any>;

  abstract getMany(accountId: string): Promise<any>;
}
