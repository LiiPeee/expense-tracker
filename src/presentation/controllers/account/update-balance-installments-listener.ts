import { Request } from 'express';
import { IUpdateBalanceInstallmentsUseCase } from '../../../domain/use-case/account/update-balance-installments-usecase';
import { Controller } from '../../protocols/controller';
import { HttpResponse } from '../../protocols/http';
import { badRequest, ok, serverError } from '../../response/helper';

export class UpdateBalanceInstallmentsListener implements Controller {
  constructor(private readonly usecase: IUpdateBalanceInstallmentsUseCase) {}
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const result = await this.usecase.execute(req.body);
      return ok(result);
    } catch (error: any) {
      if (badRequest(error)) return badRequest(error);
      return serverError(error);
    }
  }
}
