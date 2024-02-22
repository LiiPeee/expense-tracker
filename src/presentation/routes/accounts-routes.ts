import * as express from "express";
import { AccountUseCase } from "../../aplication/usecase/account-use-case";
import { AccountRepository } from "../../domain/repository/account-repository";
import { AccountController } from "../controllers/account-controller";
export const routerAccount = express.Router();
const accountRespository = new AccountRepository();
const accountUsecase = new AccountUseCase(accountRespository);
const accountController = new AccountController(accountUsecase);

routerAccount.post(
  "/account",
  accountController.createAccount.bind(accountController)
);
// routerAccount.get(
//   "/account/:id",
//   accountController.findAccountById.bind(accountController)
// );
