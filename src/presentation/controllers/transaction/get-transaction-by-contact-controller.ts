import { Request } from "express";
import { IGetTransactionByContactUseCase } from "../../../domain/controller/get-transaction-by-contact.usecase";
import { NotFoundError } from "../../errors/api-error";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";
import { badRequest, ok, serverError } from "../../response/helper";

export class GetTransactionByContactController implements Controller {
    constructor(private readonly getTransaction: IGetTransactionByContactUseCase) { }
    async handle(request: Request): Promise<HttpResponse> {
        try {
            const transaction = await this.getTransaction.execute(request.param);

            if (!transaction) throw new NotFoundError("dont have transaction")

            return ok(transaction);


        } catch (error: any) {
            if (badRequest(error)) return badRequest(error)
            return serverError(error)
        }
    }
}