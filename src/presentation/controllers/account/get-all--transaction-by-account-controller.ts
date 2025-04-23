import { Request } from 'express';
import { IGetAllTransactionByAccountUseCase } from '../../../domain/use-case/account/get-all-transaction-by-account-usecase';
import { Controller } from '../../protocols/controller';
import { HttpResponse } from '../../protocols/http';
import { badRequest, ok, serverError } from '../../response/helper';

export class GetAllTransactionByAccountController implements Controller {
  constructor(private readonly accountUsecase: IGetAllTransactionByAccountUseCase) {}
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const transactionByAccount = await this.accountUsecase.execute(req.body);

      return ok(transactionByAccount);
    } catch (error: any) {
      if (badRequest(error)) return badRequest(error);
      return serverError(error);
    }
  }
}
