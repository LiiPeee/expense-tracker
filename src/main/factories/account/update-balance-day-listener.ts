import { UpdateBalanceDayAccountUseCase } from '../../../data-layer/usecase/account/update-balance-day.usecase';
import { AccountRepository } from '../../../infrastructure/repository/account-repository';
import { CategoryRepository } from '../../../infrastructure/repository/category-repository';
import { TransactionRepository } from '../../../infrastructure/repository/transaction-repository';
import { UpdateBalanceAccounListener } from '../../../presentation/controllers/account/update-balance-account-listener';
import { validatePrisma } from '../../package/prisma';

export const makeUpdateBalanceDayListener = async (): Promise<void> => {
  const prisma = await validatePrisma();

  const transactionRepository:TransactionRepository = TransactionRepository.createClient(prisma);
  const accountRepository = AccountRepository.createClient(prisma);
  const categoryRepository = CategoryRepository.createClient(prisma);

  const usecase = new UpdateBalanceDayAccountUseCase(
    accountRepository,
    transactionRepository,
    categoryRepository,
  );

  new UpdateBalanceAccounListener(usecase);
};
