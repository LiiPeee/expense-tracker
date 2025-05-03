import { UpdateBalanceDayAccountUseCase } from '../../../data-layer/usecase/account/update-balance.usecase';
import { AccountRepository } from '../../../infrastructure/repository/account-repository';
import { CategoryRepository } from '../../../infrastructure/repository/category-repository';
import { TransactionRepository } from '../../../infrastructure/repository/transaction-repository';
import { UpdateBalanceAccounListener } from '../../../presentation/controllers/account/update-balance-account-listener';
import { eventEmitter } from '../../factories/transaction/create-transaction.factory';
import { validatePrisma } from '../../package/prisma';

export const makeUpdateBalanceDayListener = async (): Promise<void> => {
  const prisma = await validatePrisma();

  const transactionRepository = TransactionRepository.createClient(prisma);
  const accountRepository = AccountRepository.createClient(prisma);
  const categoryRepository = CategoryRepository.createClient(prisma);

  const usecase = new UpdateBalanceDayAccountUseCase(
    accountRepository,
    transactionRepository,
    categoryRepository,
    eventEmitter
  );

  new UpdateBalanceAccounListener(usecase);
};
