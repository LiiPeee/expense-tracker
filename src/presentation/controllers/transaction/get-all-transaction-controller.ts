import { Request } from "express";
import { NotFoundError } from "../../../data-layer/errors/not-found-error";
import { IGetTransactionUseCase } from "../../../domain/controller/transaction/get-transaction.usecase";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";
import { badRequest, ok, serverError } from "../../response/helper";

export class GetTransactionController implements Controller {
  constructor(private readonly getTransaction: IGetTransactionUseCase) {}
  async handle(request: Request): Promise<HttpResponse> {
    try {
      const transaction = await this.getTransaction.execute(request.body);

      if (!transaction.length) throw new NotFoundError("dont have transaction");

      return ok(transaction);
    } catch (error: any) {
      if (badRequest(error)) return badRequest(error);
      return serverError(error);
    }
  }
}
