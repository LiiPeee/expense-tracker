import { ICreateTransactionDayUseCase } from "@/domain/use-case/transaction/create-transaction-day-usecase";
import { BadRequestError } from "@/infrastructure/errors/bad-request-error";
import { Controller } from "@/presentation/protocols/controller";
import { HttpResponse } from "@/presentation/protocols/http";
import { badRequest, created, serverError } from "@/presentation/response/helper";
import { Request } from "express";

export class CreateTransactionDayController implements Controller {
  constructor(private readonly transactionUseCase: ICreateTransactionDayUseCase) {}
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const { email, value, paid, contact, category, recurrence } = req.body;

      if (!email && !value && !paid && contact.name && category.name) throw new BadRequestError("you dont send parameters necessary");

      if (recurrence !== "D") throw new BadRequestError("This endpoint its for transaction to the day");

      const transaction = await this.transactionUseCase.execute(req.body);

      return created(transaction);
    } catch (error: any) {
      if (badRequest(error)) return badRequest(error);
      return serverError(error);
    }
  }
}
