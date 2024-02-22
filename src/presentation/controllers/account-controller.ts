import { Request, Response } from "express";
import { AccountUseCase } from "../../aplication/usecase/account-use-case";

export class AccountController {
  constructor(private readonly accountUsecase: AccountUseCase) {}

  async createAccount(req: Request, res: Response) {
    try {
      const creatingAccount = await this.accountUsecase.createAccount(req.body);
      return res.json(creatingAccount).status(201);
    } catch (err: any) {
      return res.json(err).status(500);
    }
  }
  // async findAccountById(req: Request, res: Response) {
  //   try {
  //     const _id = req.params.id;
  //     const findAccount = await this.accountUsecase.findAccountById(_id);
  //     return res.json(findAccount).status(200);
  //   } catch (err: any) {
  //     return res.json({ message: err.message }).status(500);
  //   }
  // }
}
