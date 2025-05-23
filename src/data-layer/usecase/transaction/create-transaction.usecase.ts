import { ITransaction } from '../../../domain/entity/transaction';
import { IEvent } from '../../../domain/framework/event';
import { Transaction } from '../../../domain/models/entities/transaction';
import { IAccountRepository } from '../../../domain/repository/IAcountRepository';
import { ICategoryRepository } from '../../../domain/repository/ICategoryRepository';
import { IContactRepository } from '../../../domain/repository/IContactRepository';
import { ITransactionRepository } from '../../../domain/repository/ITransactionRepository';
import {
  CreateTransactionInput,
  CreateTransactionOutPut,
  ICreateTransactionUseCase,
} from '../../../domain/use-case/transaction/create-transaction-usecase';
import { DataBaseError } from '../../../infrastructure/errors/data-base-error';
import { NotFoundError } from '../../../infrastructure/errors/not-found-error';

export class CreateTransactionUseCase implements ICreateTransactionUseCase {
  constructor(
    private readonly transactionRepository: ITransactionRepository,
    private readonly accountRepository: IAccountRepository,
    private readonly categoryRepository: ICategoryRepository,
    private readonly contactRepository: IContactRepository,
    private readonly _event: IEvent
  ) {}

  async execute(input: CreateTransactionInput): Promise<CreateTransactionOutPut> {
    const account = await this.accountRepository.getWithEmail(input.email);

    if (!account) throw new NotFoundError('cannt find your account');

    const category = await this.categoryRepository.getByName(input.category.name);

    if (!category) throw new NotFoundError('cannt find your category');

    const contact = await this.contactRepository.getByEmail(input.contact.email);

    if (!contact) throw new NotFoundError('cannt find your contact');

    const transaction = new Transaction({
      account: account,
      value: input.value,
      paymentName: input.paymentName,
      paid: input.paid,
      comment: input.comment,
      recurrence: input.recurrence,
      category: category,
      contact: contact,
      number_of_installments: input.number_of_installments,
      installments_date: new Date(input.installments_date),
    });

    if (input.recurrence === 'M') {
      const transactionPerMonth = await this.createInstallmentsPerMonth(transaction);
      return { transaction: transactionPerMonth };
    }

    if (input.recurrence === 'W') {
      const transactionPerWeek = await this.createInstallmentsPerWeek(transaction);
      return {
        transaction: transactionPerWeek,
      };
    }

    const transactionCreated = await this.transactionRepository.create(transaction);
    const event = this._event.emit('creted-transaction-day', transactionCreated);
    event;
    return {
      transaction: transactionCreated,
    };
  }

  // I need refactor this two function

  async createInstallmentsPerMonth(transaction: ITransaction): Promise<any> {
    let date = new Date();

    for (let index = 1; index <= transaction.number_of_installments; index++) {
      const transactionCreated = await this.transactionRepository.create(transaction);
      const newDate = new Date(date.setMonth(date.getMonth() + 1));

      transaction.installments_date = newDate;

      if (transaction.number_of_installments === index) return transactionCreated;
    }
  }

  async createInstallmentsPerWeek(transaction: ITransaction): Promise<any> {
    let startDate = new Date(transaction.installments_date);

    let week = 7 * 24 * 60 * 60 * 1000;

    for (let index = 0; index <= transaction.number_of_installments; index++) {
      const newDate = new Date(startDate.getTime() + index * week);

      transaction.installments_date = newDate;

      const transactionCreated: Transaction = await this.transactionRepository.create(transaction);

      if (!transactionCreated) throw new DataBaseError('somethings wrong when create transaction');

      if (transaction.number_of_installments === index) return transactionCreated;
    }
  }
}
