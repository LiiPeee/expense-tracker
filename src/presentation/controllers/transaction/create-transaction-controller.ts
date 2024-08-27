import { Request } from "express";
import { ICreateTransactionUseCase } from "../../../domain/controller/create-transaction.usecase";
import { BadRequestError, DataBaseError } from "../../errors/api-error";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";
import { created } from "../../response/helper";


export class CreateTransactionController implements Controller {
  constructor(private readonly transactionUseCase: ICreateTransactionUseCase) { }
  async handle(req: Request): Promise<HttpResponse> {

    const { email } = req.body;
    const { value, formatPayment, paid, contacts } = req.body.transaction;

    if (!email && !value && !formatPayment && !paid && !contacts.name && contacts.phone) throw new BadRequestError("you dont send parameters necessary");

    const transaction = await this.transactionUseCase.execute(
      req.body.transaction
    );
    if (!transaction) throw new DataBaseError("somenthing is wrong in Database");

    return created(transaction);
  }

}
