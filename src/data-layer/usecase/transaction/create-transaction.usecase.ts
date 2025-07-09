import {ITransaction} from "@/domain/entity/transaction";
import {IQueue} from "@/domain/framework/queue";
import {Transaction} from "@/domain/models/entities/transaction";
import {IAccountRepository} from "@/domain/repository/IAcountRepository";
import {ICategoryRepository} from "@/domain/repository/ICategoryRepository";
import {IContactRepository} from "@/domain/repository/IContactRepository";
import {ITransactionRepository} from "@/domain/repository/ITransactionRepository";
import {
	CreateTransactionInput,
	CreateTransactionOutPut,
	ICreateTransactionUseCase,
} from "@/domain/use-case/transaction/create-transaction-usecase";
import {DataBaseError} from "@/infrastructure/errors/data-base-error";
import {NotFoundError} from "../../../infrastructure/errors/not-found-error";

export class CreateTransactionUseCase implements ICreateTransactionUseCase {
	constructor(
		private readonly transactionRepository: ITransactionRepository,
		private readonly accountRepository: IAccountRepository,
		private readonly categoryRepository: ICategoryRepository,
		private readonly contactRepository: IContactRepository,
		private readonly _event: IQueue
	) {
	}

	async execute(input: CreateTransactionInput): Promise<CreateTransactionOutPut> {

		const [account, category, contact] =
			await Promise.all([
				await this.accountRepository.getWithEmail(input.email),
				await this.categoryRepository.getByName(input.category.name),
				await this.contactRepository.getByEmail(input.contact.email)
			])

		if (!account || !category || !contact) {
			throw new NotFoundError("we didn't find these things")
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

		if (input.recurrence === "M" || input.recurrence === "W") {
			const date: Date = new Date()
			const week = 7 * 24 * 60 * 60 * 1000;
			const transactionInstallments = input.recurrence === "M" ? await this.createInstallments(transaction, new Date(date.setMonth(date.getMonth() + 1))) :
				await this.createInstallments(transaction, new Date(date.getTime() * week))
			return {transaction: transactionInstallments};
		}


		const transactionCreated = await this.transactionRepository.create(transaction);


		// this._event.addJob('transactions', 'process-transaction', transactionCreated, {
		// 	repeat: {
		// 		every: 5000
		// 	},
		// 	delay: 0,
		// 	priority: 1,
		// 	jobId: 'process-transaction'
		// })


		return {
			transaction: transactionCreated,
		};
	}

	// I need refactor this two function

	async createInstallments(transaction: ITransaction, transactionDate: Date): Promise<any> {
		let date = new Date();

		for (let index = 1; index <= transaction.number_of_installments; index++) {
			const transactionCreated = await this.transactionRepository.create(transaction);

			transaction.installments_date = transactionDate;

			if (transaction.number_of_installments === index) return transactionCreated;
		}
	}

	// async createInstallmentsPerWeek(transaction: ITransaction): Promise<any> {
	// 	let startDate: Date = new Date(transaction.installments_date);
	//
	// 	let week: number = 7 * 24 * 60 * 60 * 1000;
	//
	// 	for (let index = 0; index <= transaction.number_of_installments; index++) {
	// 		const newDate: Date = new Date(startDate.getTime() + index * week);
	//
	// 		transaction.installments_date = newDate;
	//
	// 		const transactionCreated: Transaction = await this.transactionRepository.create(transaction);
	//
	// 		if (!transactionCreated) throw new DataBaseError("somethings wrong when create transaction");
	//
	// 		if (transaction.number_of_installments === index) return transactionCreated;
	// 	}
	// }
}
