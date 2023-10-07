import * as express from "express"
import { AccountRepository } from "../repository/AccountRepository";
import { AccountUseCase } from "../usecase/AccountUseCase";
import { AccountController } from "../controllers/AccountController";
export const routerAccount = express.Router();

const accountRespository = new AccountRepository();
const accountUsecase = new AccountUseCase(accountRespository);
const accountController = new AccountController(accountUsecase);

routerAccount.post('', accountController.createAccount.bind(accountController))