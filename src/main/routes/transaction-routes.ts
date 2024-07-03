// import express from "express";
// import { TransactionUseCase } from "../../data/usecase/create-transaction.usecase";
// import { AccountRepository } from "../../infrastructure/repository/account-repository";
// import { TransactionRepository } from "../../infrastructure/repository/transaction-repository";
// import { TransactionController } from "../../presentation/controllers/transaction-controller";

// export const routerTransaction = express.Router();

// const transacaoRepository = new TransactionRepository();
// const accountRepository = new AccountRepository();
// const transacaoService = new TransactionUseCase(
//   transacaoRepository,
//   accountRepository
// );
// const transactionController = new TransactionController(transacaoService);
// routerTransaction.post(
//   "/transaction",
//   transactionController.createTransaction.bind(transactionController)
// );
