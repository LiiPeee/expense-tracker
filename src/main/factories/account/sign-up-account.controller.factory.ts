import { SingUpAccountUseCase } from "../../../data/usecase/account/sing-up-account.usecase";
import { Bcrypter } from "../../../data/utils/bcrypter.adapter";
import { JwtAdapter } from "../../../data/utils/jwt.adapter";
import { AccountRepository } from "../../../infrastructure/repository/account-repository";
import { SignUpAccounController } from "../../../presentation/controllers/account/sign-up-account-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { validatePrisma } from "../../package/prisma";


export const makeSignUpController = async (): Promise<Controller> => {
  const prisma = await validatePrisma()
  const bcrypter = new Bcrypter();
  const jwt = new JwtAdapter();
  const repo = AccountRepository.createClient(prisma);
  const usecase = new SingUpAccountUseCase(repo, bcrypter, jwt);
  const controller = new SignUpAccounController(usecase);
  return controller;
};
