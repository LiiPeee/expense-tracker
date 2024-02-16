import { Request, Response } from "express";
import { AccountUseCase } from "../usecase/account-use-case";

export class AccountController {
  constructor(private readonly accountUsecase: AccountUseCase) {}

  async createAccount(req: Request, res: Response) {
    try {
      const creatingAccount = await this.accountUsecase.createAccount(req.body);
      res.json(creatingAccount).status(200);
    } catch (err: any) {
      res.json(err).status(500);
    }
  }
}
