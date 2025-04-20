import { Request } from "express";
import { ICreateAddressUseCase } from "../../../domain/use-case/address/create-address.usecase";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";
import { badRequest, created, serverError } from "../../response/helper";

export class CreateAddressController implements Controller {
  constructor(private readonly addressUsecase: ICreateAddressUseCase) {}
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const createAddress = await this.addressUsecase.execute(req.body);

      return created(createAddress);
    } catch (error: any) {
      if (badRequest(error)) return badRequest(error);
      return serverError(error);
    }
  }
}
