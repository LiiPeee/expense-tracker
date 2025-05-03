import { IEvent } from '../../../domain/entity/event';
import { Account } from '../../../domain/models/entities/account';
import { IAccountRepository } from '../../../domain/repository/IAcountRepository';
import { ICategoryRepository } from '../../../domain/repository/ICategoryRepository';
import { ITransactionRepository } from '../../../domain/repository/ITransactionRepository';
import {
  IUpdateBalanceDayAcountUseCase,
  UpdateBalanceInput,
} from '../../../domain/use-case/account/update-balance-day-usecase';
import { BadRequestError } from '../../errors/bad-request-error';

export class UpdateBalanceDayAccountUseCase implements IUpdateBalanceDayAcountUseCase {
  constructor(
    private readonly _accountRepository: IAccountRepository,
    private readonly _transactionRepository: ITransactionRepository,
    private readonly _categoryRepository: ICategoryRepository,
    private readonly _event: IEvent
  ) {
    this.execute();
  }
  async execute(): Promise<void> {
    this._event.on('creted-transaction-day', this.update.bind(this));
  }

  async update(transaction: UpdateBalanceInput): Promise<void> {
    const account: Account = await this._accountRepository.getWithId(transaction.accountId);

    if (transaction.recurrence != 'D' && transaction.paid != true)
      throw new BadRequestError('Its not a transaction from this day');

    const newAccount = new Account().setBalance(account.balance);

    const category = await this._categoryRepository.get(transaction.categoryId);

    const updateBalance = newAccount.updateBalance(transaction.value, category.type);

    await this._accountRepository.newBalance(account.email, updateBalance);

    await this._transactionRepository.paidTransaction(transaction.id);
  }
}
