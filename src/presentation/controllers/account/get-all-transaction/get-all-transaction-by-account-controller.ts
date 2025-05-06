import { Request } from 'express';
import { DataBaseError } from '../../../../data-layer/errors/data-base-error';
import { IGetTransactionByAccountMapper } from '../../../../domain/controller/account/get-all-transaction-by-account/get-transaction-by-contact.mapper';
import { IGetAllTransactionByAccountUseCase } from '../../../../domain/use-case/account/get-all-transaction-by-account-usecase';
import { Controller } from '../../../protocols/controller';
import { HttpResponse } from '../../../protocols/http';
import { badRequest, ok, serverError } from '../../../response/helper';

export class GetAllTransactionAccountController implements Controller {
  constructor(
    private readonly accountUsecase: IGetAllTransactionByAccountUseCase,
    private readonly accountTransactionMapper: IGetTransactionByAccountMapper
  ) {}
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const transactionByAccount = await this.accountUsecase.execute(req.body);

      if (!transactionByAccount) throw new DataBaseError('somenthing wrong happen with usecase');

      const output = await this.accountTransactionMapper.mapDto(transactionByAccount);

      return ok(output);
    } catch (error: any) {
      if (badRequest(error)) return badRequest(error);
      return serverError(error);
    }
  }
}
