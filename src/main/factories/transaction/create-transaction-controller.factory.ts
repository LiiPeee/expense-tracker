import { CreateTransactionUseCase } from "../../../data/usecase/create-transaction.usecase";
import { AccountRepository } from "../../../infrastructure/repository/account-repository";
import { TransactionRepository } from "../../../infrastructure/repository/transaction-repository";
import { TransactionController } from "../../../presentation/controllers/transaction-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { prisma } from "../../package/prisma";

export const makeCreateTransactionController = (): Controller => {
  const transactionRepository = TransactionRepository.createClient(prisma);
  const accountRepository = AccountRepository.createClient(prisma);
  const useCase = new CreateTransactionUseCase(
    transactionRepository,
    accountRepository
  );
  const controller = new TransactionController(useCase);
  return controller;
};
