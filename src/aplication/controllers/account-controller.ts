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
    if (!name || !email || !password || !balance)
      throw new BadRequestError("You dont send some parameters");
    const creatingAccount = await this.accountUsecase.createAccount(req.body);
    if (!creatingAccount) throw new DataBaseError("Something is wrong in DB");

    if (creatingAccount) return res.json(creatingAccount).status(201);
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
