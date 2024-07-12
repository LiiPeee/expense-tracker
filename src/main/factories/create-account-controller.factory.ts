import { CreateAccountUseCase } from "../../data/usecase/account/create-account.usecase";
import { EncrypterAdapter } from "../../data/utils/encrypter.adapter";
import { AccountRepository } from "../../infrastructure/repository/account-repository";
import { CreateAccountController } from "../../presentation/controllers/account/create-account-controller";
import { Controller } from "../../presentation/protocols/controller";
import { prisma } from "../package/prisma";

export const makeAccountController = (): Controller => {
  const encrypter = new EncrypterAdapter();
  const accountRepository = AccountRepository.createClient(prisma);
  const useCase = new CreateAccountUseCase(accountRepository, encrypter);
  const controller = new CreateAccountController(useCase);
  return controller;
};
