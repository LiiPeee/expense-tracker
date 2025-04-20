import { ITransactionRepository } from '../../../domain/repository/ITransactionRepository';
import {
  GetTransactionByMonthInput,
  GetTransactionOutPut,
  IGetTransactionByMonthUseCase,
} from '../../../domain/use-case/transaction/get-transaction-by-month-usecase';

export class GetTransactionByMonthUseCase implements IGetTransactionByMonthUseCase {
  constructor(private readonly _transactionRepostiry: ITransactionRepository) {}
  async execute(input: GetTransactionByMonthInput): Promise<GetTransactionOutPut> {
    const transaction = await this._transactionRepostiry.getByMonth(input);

    return transaction;
  }
}
