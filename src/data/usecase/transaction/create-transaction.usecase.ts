import { CreateTransactionInput } from "../../../domain/inputAndOutput";
import { TransctionDto } from "../../../domain/models/dto/create-transaction-dto";
import { IAccountRepository } from "../../../domain/repository/IAcountRepository";
import { ITransactionRepository } from "../../../domain/repository/ITransactionRepository";
import { UseCase } from "../../../domain/use-case/usecase";
import { NotFoundError } from "../../../presentation/errors/api-error";



export class CreateTransactionUseCase implements UseCase<CreateTransactionInput, TransctionDto> {
  constructor(
    private readonly transactionRepository: ITransactionRepository,
    private readonly accountRepository: IAccountRepository
  ) { }

  async execute(input: CreateTransactionInput): Promise<TransctionDto> {

    const account = await this.accountRepository.getUnique(input.email);

    if (!account) throw new NotFoundError("cannt find your account");

    if (input.transaction.recurrence === "M") return await this.createInstallmentsPerWeek(account.email, input);

    if (input.transaction.recurrence === "W") return await this.createInstallmentsPerMonth(account.email, input);

    return await this.transactionRepository.create(
      account.email,
      input
    );
  }
  private async createInstallmentsPerMonth(email: string, input: CreateTransactionInput): Promise<any> {
    let date = new Date();

    if (!input.transaction.number_of_installments) return;

    for (let index = 1; index <= input.transaction.number_of_installments; index++) {
      const newDate = new Date(date.setMonth(date.getMonth() + 1
      ));

      input.transaction.installments_date = newDate;

      const transaction = await this.transactionRepository.create(
        email,
        input
      );

      if (input.transaction.number_of_installments === index) return transaction

    }
  }
  private async createInstallmentsPerWeek(email: string, input: CreateTransactionInput): Promise<any> {
    if (!input.transaction.number_of_installments || !input.transaction.installments_date) return;

    let startDate = new Date(input.transaction.installments_date);

    let week = 7 * 24 * 60 * 60 * 1000;

    for (let index = 0; index <= input.transaction.number_of_installments; index++) {

      const newDate = new Date(startDate.getTime() + index * week)

      input.transaction.installments_date = newDate;

      const transaction = await this.transactionRepository.create(
        email,
        input
      );

      if (input.transaction.number_of_installments === index) return transaction

    }
  }

}
