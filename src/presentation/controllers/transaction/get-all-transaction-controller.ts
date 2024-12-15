import { Request } from "express";
import { IGetTransactionUseCase } from "../../../domain/controller/get-transaction.usecase";
import { NotFoundError } from "../../errors/api-error";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";
import { badRequest, ok, serverError } from "../../response/helper";

export class GetTransactionController implements Controller {
    constructor(private readonly getTransaction: IGetTransactionUseCase) { }
    async handle(request: Request): Promise<HttpResponse> {
        try {
            const transaction = await this.getTransaction.execute(request.body);

            if (!transaction.length) throw new NotFoundError("dont have transaction")

            return ok(transaction);


        } catch (error: any) {
            if (badRequest(error)) return badRequest(error)
            return serverError(error)
        }

    }

}