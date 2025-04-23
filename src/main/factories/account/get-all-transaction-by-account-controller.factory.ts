import { GetAllTransactionByAccountUseCase } from '../../../data-layer/usecase/account/get-all-transaction-by-account.usecase';
import { EncrypterAdapter } from '../../../data-layer/utils/encrypter.adapter';
import { AccountRepository } from '../../../infrastructure/repository/account-repository';
import { GetAllTransactionByAccountController } from '../../../presentation/controllers/account/get-all-transaction/get-all-transaction-by-account-controller';
import { GetTransactionByAccountByMapper } from '../../../presentation/controllers/account/get-all-transaction/get-transaction-by-contact.mapper';
import { Controller } from '../../../presentation/protocols/controller';
import { validatePrisma } from '../../package/prisma';

export const makeGetTransactionAccountController = async (): Promise<Controller> => {
  const prisma = await validatePrisma();
  const encrypter = new EncrypterAdapter();
  const accountRepository = AccountRepository.createClient(prisma);
  const useCase = new GetAllTransactionByAccountUseCase(accountRepository);
  const mapper = new GetTransactionByAccountByMapper();
  const controller = new GetAllTransactionByAccountController(useCase, mapper);
  return controller;
};
