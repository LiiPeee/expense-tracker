import express from "express";
import { TransactionController } from "../../aplication/controllers/transaction-controller";
import { TransactionUseCase } from "../../data/usecase/transaction-usecase";
import { TransactionRepository } from "../repositorie/transaction-repository";


export const routerTransaction = express.Router();

const transacaoRepository = new TransactionRepository();
const transacaoService = new TransactionUseCase(transacaoRepository);
const transactionController = new TransactionController(transacaoService);
routerTransaction.post(
  "/transaction",
  transactionController.createTransaction.bind(transactionController)
);
// routerTransaction.get(
//   "/transacao/:id",
//   transactionController.getTransactionById.bind(transactionController)
// );
// routerTransaction.get(
//   "/transacao",
//   transactionController.getAllTransaction.bind(transactionController)
// );
// routerTransaction.put(
//   "/transaca/:id",
//   transactionController.updateTransaction.bind(transactionController)
// );
// routerTransaction.delete(
//   "/transacao/:id",
//   transactionController.deleteTransactionById.bind(transactionController)
// );
