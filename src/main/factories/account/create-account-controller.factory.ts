import { CreateAccountUseCase } from "../../../data/usecase/account/create-account.usecase";
import { EncrypterAdapter } from "../../../data/utils/encrypter.adapter";
import { JwtAdapter } from "../../../data/utils/jwt.adapter";
import { AccountRepository } from "../../../infrastructure/repository/account-repository";
import { CreateAccountController } from "../../../presentation/controllers/account/create-account-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { validatePrisma } from "../../package/prisma";


export const makeAccountController = async (): Promise<Controller> => {
  const prisma = await validatePrisma();
  const encrypter = new EncrypterAdapter();
  const accountRepository = AccountRepository.createClient(prisma);
  const jwt = new JwtAdapter();
  const useCase = new CreateAccountUseCase(accountRepository, encrypter, jwt);
  const controller = new CreateAccountController(useCase);
  return controller;
};
