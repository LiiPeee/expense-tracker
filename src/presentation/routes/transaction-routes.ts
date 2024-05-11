import express from "express";
import { TransactionController } from "../../aplication/controllers/transaction-controller";
import { TransactionUseCase } from "../../data/usecase/transaction-usecase";
import { AccountRepository } from "../repositorie/account-repository";
import { TransactionRepository } from "../repositorie/transaction-repository";


export const routerTransaction = express.Router();

const transacaoRepository = new TransactionRepository();
const accountRepository = new AccountRepository();
const transacaoService = new TransactionUseCase(transacaoRepository, accountRepository);
const transactionController = new TransactionController(transacaoService);
routerTransaction.post(
  "/transaction",
  transactionController.createTransaction.bind(transactionController)
);

