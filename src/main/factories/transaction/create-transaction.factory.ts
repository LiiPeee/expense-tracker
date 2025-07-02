import { CreateTransactionUseCase } from "../../../data-layer/usecase/transaction/create-transaction.usecase";
import { AccountRepository } from "../../../infrastructure/repository/account-repository";
import { CategoryRepository } from "../../../infrastructure/repository/category-repository";
import { ContactRepository } from "../../../infrastructure/repository/contact-repository";
import { TransactionRepository } from "../../../infrastructure/repository/transaction-repository";
import { CreateTransactionController } from "../../../presentation/controllers/transaction/create-transaction-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { validatePrisma } from "../../package/prisma";

export const makeCreateTransactionController = async (): Promise<Controller> => {
  const prisma = await validatePrisma();

  const transactionRepository = TransactionRepository.createClient(prisma);
  const accountRepository = AccountRepository.createClient(prisma);
  const categoryRepository = CategoryRepository.createClient(prisma);
  const contactRepository = ContactRepository.createClient(prisma);

  const useCase = new CreateTransactionUseCase(transactionRepository, accountRepository, categoryRepository, contactRepository);

  const controller = new CreateTransactionController(useCase);

  return controller;
};
