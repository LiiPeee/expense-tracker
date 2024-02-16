import * as express from "express";
import { AccountController } from "../controllers/account-controller";
import { AccountModel } from "../model/account";
import { AccountRepository } from "../repository/account-repository";
import { AccountUseCase } from "../usecase/account-use-case";
export const routerAccount = express.Router();
const accountRespository = new AccountRepository(AccountModel);
const accountUsecase = new AccountUseCase(accountRespository);
const accountController = new AccountController(accountUsecase);

routerAccount.post(
  "/account",
  accountController.createAccount.bind(accountController)
);
