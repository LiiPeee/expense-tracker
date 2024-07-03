import { Request } from "express";
import { CreateAccountUseCase } from "../../../data/usecase/account/create-account.usecase";
import { BadRequestError } from "../../errors/api-error";
import { ok, serverError } from "../../helper/helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";

export class CreateAccountController implements Controller {
  constructor(private readonly accountUsecase: CreateAccountUseCase) {}
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const { name, email, password, balance } = req.body;
      if (!name && !email && !password && !balance) {
        throw new BadRequestError("You dont send some parameters");
      }
      const creatingAccount = await this.accountUsecase.execute(req.body);

      return ok(creatingAccount);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
