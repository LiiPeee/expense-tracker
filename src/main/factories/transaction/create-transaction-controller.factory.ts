import { CreateTransactionUseCase } from "../../../data/usecase/transaction/create-transaction.usecase";
import { AccountRepository } from "../../../infrastructure/repository/account-repository";
import { TransactionRepository } from "../../../infrastructure/repository/transaction-repository";
import { CreateTransactionController } from "../../../presentation/controllers/transaction/create-transaction-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { validatePrisma } from "../../package/prisma";


export const makeCreateTransactionController = async (): Promise<Controller> => {
  const prisma = await validatePrisma();
  const transactionRepository = TransactionRepository.createClient(prisma);
  const accountRepository = AccountRepository.createClient(prisma);
  const useCase = new CreateTransactionUseCase(
    transactionRepository,
    accountRepository
  );
  const controller = new CreateTransactionController(useCase);
  return controller;
};
