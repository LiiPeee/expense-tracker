import { GetTransactionByMonthUseCase } from '../../../data-layer/usecase/transaction/get-by-month-transaction.usecase';
import { TransactionRepository } from '../../../infrastructure/repository/transaction-repository';
import { GetTransactionByMonthController } from '../../../presentation/controllers/transaction/get-transaction-by-month-controller';
import { Controller } from '../../../presentation/protocols/controller';
import { validatePrisma } from '../../package/prisma';

export const makeGetTransactionByMonthController = async (): Promise<Controller> => {
  const prisma = await validatePrisma();
  const repository = new TransactionRepository(prisma);
  const usecase = new GetTransactionByMonthUseCase(repository);

  const controller = new GetTransactionByMonthController(usecase);

  return controller;
};
