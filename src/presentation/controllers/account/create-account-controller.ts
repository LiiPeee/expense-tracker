import { Request } from "express";
import { CreateAccountUseCase } from "../../../data-layer/usecase/account/create-account.usecase";
import { BadRequestError } from "../../errors/api-error";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";
import { badRequest, ok, serverError } from "../../response/helper";

export class CreateAccountController implements Controller {
  constructor(private readonly accountUsecase: CreateAccountUseCase) { }
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const { name, email, password } = req.body;
      if (!name && !email && !password) {
        throw new BadRequestError("You dont send some parameters");
      }
      const creatingAccount = await this.accountUsecase.execute(req.body);

      return ok(creatingAccount);
    } catch (error: any) {
      if (badRequest(error)) return badRequest(error)
      return serverError(error)
    }
  }
}
