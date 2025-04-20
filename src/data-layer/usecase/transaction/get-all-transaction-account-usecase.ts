import { ITransactionRepository } from '../../../domain/repository/ITransactionRepository';
import {
  GetAllTransactionInput,
  GetTransactionOutPut,
  IGetAllTransactionByAccountUseCase,
} from '../../../domain/use-case/transaction/get-all-transaction-by-account-usecase';

export class GetAllTransactionByAccountUseCase implements IGetAllTransactionByAccountUseCase {
  constructor(private readonly _transactionRepostiry: ITransactionRepository) {}
  async execute(input: GetAllTransactionInput): Promise<GetTransactionOutPut> {
    const transaction = await this._transactionRepostiry.getMany(input);

    return transaction;
  }
}
