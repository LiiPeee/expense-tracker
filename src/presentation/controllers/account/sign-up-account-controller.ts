import { SingUpAccountUseCase } from "../../../data/usecase/account/sing-up-account.usecase";
import { badRequest, ok } from "../../helper/helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";

export class SignUpAccounController implements Controller {
  constructor(private readonly _signUpUseCase: SingUpAccountUseCase) {}
  async handle(request: any): Promise<HttpResponse> {
    try {
      const sign = await this._signUpUseCase.execute(request.body);

      return ok(sign);
    } catch (error: any) {
      return badRequest(error);
    }
  }
}
