import { CreateTransactionDayUseCase } from "@/data-layer/usecase/transaction/create-transaction-day.usecase";
import { BullMQAdapter } from "@/data-layer/utils/create-queue.adapter";
import { CreateTransactionDayController } from "@/presentation/controllers/transaction/create-transaction-day-controller";
import { AccountRepository } from "../../../infrastructure/repository/account-repository";
import { CategoryRepository } from "../../../infrastructure/repository/category-repository";
import { ContactRepository } from "../../../infrastructure/repository/contact-repository";
import { TransactionRepository } from "../../../infrastructure/repository/transaction-repository";
import { Controller } from "../../../presentation/protocols/controller";
import { validatePrisma } from "../../package/prisma";

export const makeCreateTransactionDayController = async (): Promise<Controller> => {
  const prisma = await validatePrisma();

  const bullMq = new BullMQAdapter();

  const transactionRepository = TransactionRepository.createClient(prisma);
  const accountRepository = AccountRepository.createClient(prisma);
  const categoryRepository = CategoryRepository.createClient(prisma);
  const contactRepository = ContactRepository.createClient(prisma);

  const useCase = new CreateTransactionDayUseCase(transactionRepository, accountRepository, categoryRepository, contactRepository, bullMq);

  const controller = new CreateTransactionDayController(useCase);

  return controller;
};
