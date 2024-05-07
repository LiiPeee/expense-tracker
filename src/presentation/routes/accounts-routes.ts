import * as express from "express";
import { AccountController } from "../../aplication/controllers/account-controller";
import { AccountUseCase } from "../../data/usecase/account-use-case";
import { AccountRepository } from "../repositorie/account-repository";
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
