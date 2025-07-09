import { IConsumer } from "../../../domain/framework/consumer";
import { Account } from "../../../domain/models/entities/account";
import { IAccountRepository } from "../../../domain/repository/IAcountRepository";
import { ICategoryRepository } from "../../../domain/repository/ICategoryRepository";
import { ITransactionRepository } from "../../../domain/repository/ITransactionRepository";
import { IUpdateBalanceDayAcountUseCase, UpdateBalanceInput } from "../../../domain/use-case/account/update-balance-day-usecase";
import { BadRequestError } from "../../../infrastructure/errors/bad-request-error";
import {ConsumerQueueAdapter} from "@/data-layer/utils/consumer-queue.adapter";

export class UpdateBalanceDayAccountUseCase implements IUpdateBalanceDayAcountUseCase {
  constructor(
    private readonly _accountRepository: IAccountRepository,
    private readonly _transactionRepository: ITransactionRepository,
    private readonly _categoryRepository: ICategoryRepository,
  ) {
  }

  async update(transaction: UpdateBalanceInput): Promise<void> {
    const account: Account = await this._accountRepository.getWithId(transaction.accountId);

    const newAccount:Account = new Account().setBalance(account.balance);

    const category = await this._categoryRepository.get(transaction.categoryId);

    const updateBalance = newAccount.updateBalance(transaction.value, category.type);

    await this._accountRepository.newBalance(account.email, updateBalance);

    await this._transactionRepository.paidTransaction(transaction.id);
  }


}
