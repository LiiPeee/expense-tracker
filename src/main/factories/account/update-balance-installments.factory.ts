import { UpdateBalanceInstallmentsUseCase } from '../../../data-layer/usecase/account/update-balance-installments.usecase';
import { TransactionRepository } from '../../../infrastructure/repository/transaction-repository';
import { UpdateBalanceInstallmentsListener } from '../../../presentation/controllers/account/update-balance-installments-listener';
import { Controller } from '../../../presentation/protocols/controller';
import { validatePrisma } from '../../package/prisma';

export const makeUpdateBalanceInstallmentsListener = async (): Promise<Controller> => {
  const prisma = await validatePrisma();

  const transactionRepository = TransactionRepository.createClient(prisma);

  const usecase = new UpdateBalanceInstallmentsUseCase(transactionRepository);
  const controller = new UpdateBalanceInstallmentsListener(usecase);

  return controller;
};
