import { Request } from "express";
import { IGetAddressUseCase } from "../../../domain/use-case/address/get-address.usecase";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";
import { badRequest, ok, serverError } from "../../response/helper";

export class GetAddressController implements Controller {
  constructor(private readonly addressUsecase: IGetAddressUseCase) {}
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const getAddress = await this.addressUsecase.execute(req.body);

      return ok(getAddress);
    } catch (error: any) {
      if (badRequest(error)) return badRequest(error);
      return serverError(error);
    }
  }
}
