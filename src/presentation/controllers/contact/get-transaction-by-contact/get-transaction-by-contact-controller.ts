import { Request } from 'express';
import { NotFoundError } from '../../../../infrastructure/errors/not-found-error';

import { IGetTransactionByContactMapper } from '../../../../domain/controller/contact/get-transaction-by-contact/get-transaction-by-contact.mapper';
import { IGetTransactionByContactUseCase } from '../../../../domain/use-case/contact/get-transaction-by-contact-usecase';
import { Controller } from '../../../protocols/controller';
import { HttpResponse } from '../../../protocols/http';
import { badRequest, ok, serverError } from '../../../response/helper';

export class GetTransactionByContactController implements Controller {
  constructor(
    private readonly getTransaction: IGetTransactionByContactUseCase,
    private readonly outPutDto: IGetTransactionByContactMapper
  ) {}
  async handle(request: Request): Promise<HttpResponse> {
    try {
      const response = await this.getTransaction.execute(request.body);

      if (!response) throw new NotFoundError('dont have transaction');

      const outPut = await this.outPutDto.mapDto(response);

      return ok(outPut);
    } catch (error: any) {
      if (badRequest(error)) return badRequest(error);
      return serverError(error);
    }
  }
}
