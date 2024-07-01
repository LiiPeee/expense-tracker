import * as express from "express";
import { AccountUseCase } from "../../data/usecase/account/create-account.usecase";
import { AccountRepository } from "../../infrastructure/repository/account-repository";
import { AccountController } from "../../presentation/controllers/account-controller";
export const routerAccount = express.Router();
const accountRespository = new AccountRepository();
const accountUsecase = new AccountUseCase(accountRespository);
const accountController = new AccountController(accountUsecase);

routerAccount.post(
  "/account",
  accountController.createAccount.bind(accountController)
);
routerAccount.get(
  "/account/:email",
  accountController.findAccountByEmail.bind(accountController)
);
