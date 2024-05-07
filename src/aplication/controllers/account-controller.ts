import { Request, Response } from "express";
import {
  BadRequestError,
  DataBaseError,
} from "../../data/middlaware/api-error";
import { AccountUseCase } from "../../data/usecase/account-use-case";

export class AccountController {
  constructor(private readonly accountUsecase: AccountUseCase) {}

  async createAccount(req: Request, res: Response) {
    const { name, email, password, balance } = req.body;
    if (!name && !email && !password && !balance) {
      throw new BadRequestError("You dont send some parameters");
    }
    const creatingAccount = await this.accountUsecase.createAccount(req.body);
    if (!creatingAccount) throw new DataBaseError("Something is wrong in DB");

    return res.json(creatingAccount).status(201);
  }
  async findAccountByEmail(req: Request, res: Response) {
    const email = req.params.email;
    if (!email) {
      throw new BadRequestError("You need send email for search this account");
    }
    const findAccount = await this.accountUsecase.findAccountByEmail(email);
    if (!findAccount) throw new DataBaseError(" Cannot search this account");
    return res.json(findAccount).status(200);
  }
}
