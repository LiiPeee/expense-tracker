import { ITransaction } from "@/domain/entity/transaction";
import { IQueue } from "@/domain/framework/queue";
import { Transaction } from "@/domain/models/entities/transaction";
import { IAccountRepository } from "@/domain/repository/IAcountRepository";
import { ICategoryRepository } from "@/domain/repository/ICategoryRepository";
import { IContactRepository } from "@/domain/repository/IContactRepository";
import { ITransactionRepository } from "@/domain/repository/ITransactionRepository";
import {
  CreateTransactionInput,
  CreateTransactionOutPut,
  ICreateTransactionDayUseCase,
} from "@/domain/use-case/transaction/create-transaction-day-usecase";
import { NotFoundError } from "../../../infrastructure/errors/not-found-error";

export class CreateTransactionDayUseCase implements ICreateTransactionDayUseCase {
  constructor(
    private readonly transactionRepository: ITransactionRepository,
    private readonly accountRepository: IAccountRepository,
    private readonly categoryRepository: ICategoryRepository,
    private readonly contactRepository: IContactRepository,
    private readonly _event: IQueue
  ) {}

  async execute(input: CreateTransactionInput): Promise<CreateTransactionOutPut> {
    const [account, category, contact] = await Promise.all([
      await this.accountRepository.getWithEmail(input.email),
      await this.categoryRepository.getByName(input.category.name),
      await this.contactRepository.getByEmail(input.contact.email),
    ]);

    if (!account || !category || !contact) {
      throw new NotFoundError("we didn't find these things");
    }

    if (input.recurrence === "M" || input.recurrence === "W") {
      const transactionInstallments =
      return { transaction: transactionInstallments };
    }

    const transaction: Transaction = new Transaction({
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

    const transactionCreated = await this.transactionRepository.create(transaction);

    this._event.addJob("transactions", "process-transaction", transactionCreated, {
      repeat: {
        every: 5000,
      },
      delay: 0,
      priority: 1,
      jobId: "process-transaction",
    });

    return {
      transaction: transactionCreated,
    };
  }

  async createInstallments(
    numberOfInstallments: number,
    transactionDate: Date,
    recurrence: "M" | "W",
    transaction: ITransaction
  ): Promise<any> {
    const dates = await this.installmentsDate(numberOfInstallments, transactionDate, recurrence);

    const datesInstallments = dates.map((date) => {
      return new Transaction({
        account: transaction.account,
        category: transaction.category,
        contact: transaction.contact,
        comment: transaction.comment,
        installments_date: date,
        number_of_installments: transaction.number_of_installments,
        paid: transaction.paid,
        paymentName: transaction.paymentName,
        recurrence: transaction.recurrence,
        value: transaction.value,
      });
    });
    const installmentsTransaction = await this.transactionRepository.create(datesInstallments)

  }

  async installmentsDate(numberOfInstallments: number, startDate: Date, recurrence: string) {
    let dates: Date[] = [];
    let currentDate = new Date(startDate);
    for (let index = 0; index <= numberOfInstallments; index++) {
      dates.push(new Date(startDate));

      if (recurrence === "M") {
        currentDate.setMonth(startDate.getMonth() + 1);
      } else {
        currentDate.setDate(startDate.getTime() * 7 * 24 * 60 * 60 * 1000);
      }
    }
    return dates;
  }
}
