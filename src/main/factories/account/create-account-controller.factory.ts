import { CreateAccountUseCase } from "../../../data-layer/usecase/account/create-account.usecase";
import { EncrypterAdapter } from "../../../data-layer/utils/encrypter.adapter";
import { AccountRepository } from "../../../infrastructure/repository/account-repository";
import { CreateAccountController } from "../../../presentation/controllers/account/create-account-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { validatePrisma } from "../../package/prisma";


export const makeAccountController = async (): Promise<Controller> => {
  const prisma = await validatePrisma();
  const encrypter = new EncrypterAdapter();
  const accountRepository = AccountRepository.createClient(prisma);
  // const jwt = new JwtAdapter();
  const useCase = new CreateAccountUseCase(accountRepository, encrypter);
  const controller = new CreateAccountController(useCase);
  return controller;
};
