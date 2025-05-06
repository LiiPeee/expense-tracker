import { IAccountRepository } from '../../../domain/repository/IAcountRepository';
import {
  GetAllTransactionAccountInput,
  GetAllTransactionAccountOutPut,
  IGetAllTransactionByAccountUseCase,
} from '../../../domain/use-case/account/get-all-transaction-by-account-usecase';

export class GetAllTransactionByAccountUseCase implements IGetAllTransactionByAccountUseCase {
  constructor(private readonly _accountRepository: IAccountRepository) {}
  async execute(input: GetAllTransactionAccountInput): Promise<GetAllTransactionAccountOutPut> {
    const account = await this._accountRepository.getAccountWithTransaction(input.email);

    return { account: account };
  }
}
