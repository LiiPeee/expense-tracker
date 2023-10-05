import * as express from "express"
import {  TransactionController } from "../controllers/TransactionController";
import { TransactionUseCase } from "../usecase/TransactionUseCase";
import { TransactionRepository } from "../repository/TransactionRepository";


export const router = express.Router();

const transacaoRepository = new TransactionRepository();
const transacaoService = new TransactionUseCase(transacaoRepository);
const transactionController = new TransactionController(transacaoService);
router.post('/transacao', transactionController.createTransaction.bind(transactionController));
router.get('/transacao/:id', transactionController.getTransactionById.bind(transactionController))
router.get("/transacao", transactionController.getAllTransaction.bind(transactionController))
router.put("/transaca/:id", transactionController.updateTransaction.bind(transactionController))
router.delete("/transacao/:id", transactionController.deleteTransactionById.bind(transactionController))
