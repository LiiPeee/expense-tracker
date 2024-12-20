import { Request } from "express";
import { ICreateTransactionUseCase } from "../../../domain/controller/create-transaction.usecase";
import { BadRequestError, DataBaseError } from "../../errors/api-error";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";
import { badRequest, created, serverError } from "../../response/helper";


export class CreateTransactionController implements Controller {
  constructor(private readonly transactionUseCase: ICreateTransactionUseCase) { }
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const { email } = req.body;
      const { value, formatPayment, paid, contacts } = req.body.transaction;

      if (!email && !value && !formatPayment && !paid && !contacts.name && contacts.phone) throw new BadRequestError("you dont send parameters necessary");

      const transaction = await this.transactionUseCase.execute(
        req.body);

      if (!transaction) throw new DataBaseError("somenthing is wrong in Database");

      return created(transaction);

    } catch (error: any) {
      if (badRequest(error)) return badRequest(error)
      return serverError(error)
    }

  }

}
