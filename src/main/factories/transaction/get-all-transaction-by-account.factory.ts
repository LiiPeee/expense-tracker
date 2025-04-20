import { GetAllTransactionByAccountUseCase } from '../../../data-layer/usecase/transaction/get-all-transaction-account-usecase';
import { TransactionRepository } from '../../../infrastructure/repository/transaction-repository';
import { GetAllTransactionByAccountController } from '../../../presentation/controllers/transaction/get-all-transaction-controller';
import { Controller } from '../../../presentation/protocols/controller';
import { validatePrisma } from '../../package/prisma';

export const makeGetTransactionByAccountController = async (): Promise<Controller> => {
  const prisma = await validatePrisma();
  const repository = new TransactionRepository(prisma);
  const usecase = new GetAllTransactionByAccountUseCase(repository);

  const controller = new GetAllTransactionByAccountController(usecase);

  return controller;
};
