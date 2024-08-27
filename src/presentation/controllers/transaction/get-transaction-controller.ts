import { Request } from "express";
import { IGetTransactionUseCase } from "../../../domain/controller/get-transaction.usecase";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";
import { ok, serverError } from "../../response/helper";

export class GetTransactionController implements Controller {
    constructor(private readonly getTransaction: IGetTransactionUseCase) { }
    async handle(request: Request): Promise<HttpResponse> {

        try {
            const transaction = await this.getTransaction.execute(request.body);


            return ok(transaction);

        } catch (error: any) {
            return serverError(error);
        }




    }

}