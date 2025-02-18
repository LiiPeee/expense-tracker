import { Request } from "express";
import { IDeleteContactUseCase } from "../../../domain/controller/contact/delete-contact.usecase";
import { DataBaseError } from "../../errors/api-error";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";
import { badRequest, created, serverError } from "../../response/helper";


export class DeleteContactController implements Controller {
    constructor(private readonly contactUseCase: IDeleteContactUseCase) { }
    async handle(req: Request): Promise<HttpResponse> {
        try {

            const contact = await this.contactUseCase.execute(
                req.body);

            if (!contact) throw new DataBaseError("somenthing is wrong in Database");

            return created(contact);

        } catch (error: any) {
            if (badRequest(error)) return badRequest(error)
            return serverError(error)
        }

    }

}
