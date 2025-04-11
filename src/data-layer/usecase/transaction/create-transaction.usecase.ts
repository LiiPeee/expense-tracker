import { Transaction } from "../../../domain/models/entities/transaction";
import { IAccountRepository } from "../../../domain/repository/IAcountRepository";
import { ITransactionRepository } from "../../../domain/repository/ITransactionRepository";
import { CreateTransactionInput, CreateTransactionOutPut, ICreateTransactionUseCase } from "../../../domain/use-case/create-transaction-usecase";
import { NotFoundError } from "../../../presentation/errors/api-error";



export class CreateTransactionUseCase implements ICreateTransactionUseCase {
  constructor(
    private readonly transactionRepository: ITransactionRepository,
    private readonly accountRepository: IAccountRepository
  ) { }

  async execute(input: CreateTransactionInput): Promise<CreateTransactionOutPut> {

    const account = await this.accountRepository.getUnique(input.email);

    if (!account) throw new NotFoundError("cannt find your account");

    if (input.recurrence === "M") return await this.createInstallmentsPerWeek(account.email, input);

    if (input.recurrence === "W") return await this.createInstallmentsPerMonth(account.email, input);

    const transaction = new Transaction({
      value: input.value, paymentName: input.paymentName, paid: input.paid,
      comment: input.comment,
      recurrence: input.recurrence,
      category: input.category
    })

    return await this.transactionRepository.create(
      account.email,
      transaction
    );
  }
  private async createInstallmentsPerMonth(email: string, input: CreateTransactionInput): Promise<any> {
    let date = new Date();

    if (!input.number_of_installments) return;

    for (let index = 1; index <= input.number_of_installments; index++) {
      const newDate = new Date(date.setMonth(date.getMonth() + 1
      ));

      input.installments_date = newDate;

      const transaction = await this.transactionRepository.create(
        email,
        input
      );

      if (input.number_of_installments === index) return transaction

    }
  }
  private async createInstallmentsPerWeek(email: string, input: CreateTransactionInput): Promise<any> {
    if (!input.number_of_installments || !input.installments_date) return;

    let startDate = new Date(input.installments_date);

    let week = 7 * 24 * 60 * 60 * 1000;

    for (let index = 0; index <= input.number_of_installments; index++) {

      const newDate = new Date(startDate.getTime() + index * week)

      input.installments_date = newDate;

      const transaction = await this.transactionRepository.create(
        email,
        input
      );

      if (input.number_of_installments === index) return transaction

    }
  }

}
