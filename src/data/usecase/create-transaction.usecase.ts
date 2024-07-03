// import { TransctionDto } from "../../domain/dto/transaction-dto";
// import { CreateTransactionInput } from "../../domain/inputAndOutput";
// import { ICreateTransactionUseCase } from "../../domain/use-case/create-transaction.usecase";
// import { AccountRepository } from "../../infrastructure/repository/account-repository";
// import { TransactionRepository } from "../../infrastructure/repository/transaction-repository";
// import {
//   BadRequestError,
//   NotFoundError,
// } from "../../presentation/errors/api-error";

// export class CreateTransactionUseCase implements ICreateTransactionUseCase {
//   constructor(
//     private readonly transactionRepository: TransactionRepository,
//     private readonly accountRepository: AccountRepository
//   ) {}
//   async createTransaction(
//     email: string,
//     input: CreateTransactionInput
//   ): Promise<TransctionDto> {
//     const findAccount = await this.accountRepository.findByEmail(email);

//     if (!findAccount) throw new NotFoundError("cannt find your account");

//     if (input.category === "RECEIVE") {
//       if (input.paid === true) {
//         const balance: number = findAccount.balance + input.value;
//         await this.accountRepository.updateBalance(findAccount.email, balance);
//       }
//     }

//     // crio um recorrencia
//     else if (input.category === "EXPENSE") {
//       if (findAccount.balance < input.value)
//         throw new BadRequestError(
//           "you cannt make this transaction because value is bigger than balance"
//         );

//       if (input.paid === true) {
//         const balance: number = findAccount.balance - input.value;
//         balance.toFixed(2);
//         await this.accountRepository.updateBalance(findAccount.email, balance);
//       }
//     }

//     const createTransaction =
//       await this.transactionRepository.createTransaction(
//         findAccount.email,
//         input
//       );

//     return createTransaction;
//   }
// }
