import { Request } from 'express';
import { NotFoundError } from '../../../data-layer/errors/not-found-error';
import { Controller } from '../../protocols/controller';
import { HttpResponse } from '../../protocols/http';
import { badRequest, ok, serverError } from '../../response/helper';

export class GetTransactionByContactController implements Controller {
  constructor(private readonly getTransaction: IGetTransactionByContactUseCase) {}
  async handle(request: Request): Promise<HttpResponse> {
    try {
      const transaction = await this.getTransaction.execute(request.body.param);

      if (!transaction) throw new NotFoundError('dont have transaction');

      return ok(transaction);
    } catch (error: any) {
      if (badRequest(error)) return badRequest(error);
      return serverError(error);
    }
  }
}
