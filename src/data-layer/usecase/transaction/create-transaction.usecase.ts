import { ITransaction } from "@/domain/entity/transaction";
import { ICategoryRepository } from "@/domain/repository/ICategoryRepository";
import { IContactRepository } from "@/domain/repository/IContactRepository";
import { NotFoundError } from "../../../domain/helper/errors/api-error";
import { Transaction } from "../../../domain/models/entities/transaction";
import { IAccountRepository } from "../../../domain/repository/IAcountRepository";
import { ITransactionRepository } from "../../../domain/repository/ITransactionRepository";
import { CreateTransactionInput, CreateTransactionOutPut, ICreateTransactionUseCase } from "../../../domain/use-case/transaction/create-transaction-usecase";



export class CreateTransactionUseCase implements ICreateTransactionUseCase {
  constructor(
    private readonly transactionRepository: ITransactionRepository,
    private readonly accountRepository: IAccountRepository,
    private readonly categoryRepository: ICategoryRepository,
    private readonly contactRepository: IContactRepository
  ) { }

  async execute(input: CreateTransactionInput): Promise<CreateTransactionOutPut> {

    const account = await this.accountRepository.getUnique(input.email);

    if (!account) throw new NotFoundError("cannt find your account");

    const category = await this.categoryRepository.get(input.category.id);

    if(!category) throw new NotFoundError("cannt find your account");

    const contact = await this.contactRepository.get(input.contact.id)

    if(!contact)throw new NotFoundError("cannt find your account");


    const transaction = new Transaction({
      account: account,
      value: input.value, paymentName: input.paymentName,
      paid: input.paid,
      comment: input.comment,
      recurrence: input.recurrence,
      category: category,
      contact: contact,
      number_of_installments: input.number_of_installments,
      installments_date: input.installments_date,
    })

    if (input.recurrence === "M") return await this.createInstallmentsPerWeek(transaction);

    if (input.recurrence === "W") return await this.createInstallmentsPerMonth(transaction);

    return await this.transactionRepository.create(
      transaction
    );
  }

  async createInstallmentsPerMonth(transaction: ITransaction): Promise<any> {
    let date = new Date();

    if (!transaction.number_of_installments) return;

    for (let index = 1; index <= transaction.number_of_installments; index++) {
      const newDate = new Date(date.setMonth(date.getMonth() + 1
      ));

      transaction.installments_date = newDate;

      const transactionCreated = await this.transactionRepository.create(
        transaction
      );

      if (transaction.number_of_installments === index) return transactionCreated

    }
  }
  async createInstallmentsPerWeek(transaction: ITransaction): Promise<any> {
    if (!transaction.number_of_installments || !transaction.installments_date) return;

    let startDate = new Date(transaction.installments_date);

    let week = 7 * 24 * 60 * 60 * 1000;

    for (let index = 0; index <= transaction.number_of_installments; index++) {

      const newDate = new Date(startDate.getTime() + index * week)

      transaction.installments_date = newDate;

      const transactionCreated = await this.transactionRepository.create(transaction
      );

      if (transaction.number_of_installments === index) return transactionCreated

    }
  }

}
