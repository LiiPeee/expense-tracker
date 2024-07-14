import { TransctionDto } from "../../domain/dto/transaction-dto";
import { CreateTransactionInput } from "../../domain/inputAndOutput";
import { IAccountRepository } from "../../domain/repository/IAcountRepository";
import { ITransactionRepository } from "../../domain/repository/ITransactionRepository";
import { ICreateTransactionUseCase } from "../../domain/use-case/create-transaction.usecase";
import {
  NotFoundError
} from "../../presentation/errors/api-error";


export class CreateTransactionUseCase implements ICreateTransactionUseCase {
  constructor(
    private readonly transactionRepository: ITransactionRepository,
    private readonly accountRepository: IAccountRepository
  ) { }

  async execute(email: string, input: CreateTransactionInput): Promise<TransctionDto> {

    const account = await this.accountRepository.getUnique(email);

    if (!account) throw new NotFoundError("cannt find your account");

    if (input.recurrence) return await this.createInstallments(account.email, input);

    return await this.transactionRepository.create(
      account.email,
      input
    );
  }
  private async createInstallments(email: string, input: CreateTransactionInput): Promise<any> {
    let date = new Date();

    if (!input.number_of_installments) return;

    for (let index = 1; index <= input.number_of_installments; index++) {
      let j = 1
      const newDate = new Date(date.setMonth(date.getMonth() + j))
      input.installments_date = newDate;
      const transaction = await this.transactionRepository.create(
        email,
        input
      );
      if (input.number_of_installments === index) return transaction

    }
  }
}
