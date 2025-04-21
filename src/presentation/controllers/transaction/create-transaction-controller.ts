import { Request } from 'express';
import { BadRequestError } from '../../../data-layer/errors/bad-request-error';
import { DataBaseError } from '../../../data-layer/errors/data-base-error';
import { ICreateTransactionUseCase } from '../../../domain/use-case/transaction/create-transaction-usecase';
import { Controller } from '../../protocols/controller';
import { HttpResponse } from '../../protocols/http';
import { badRequest, created, serverError } from '../../response/helper';

export class CreateTransactionController implements Controller {
  constructor(private readonly transactionUseCase: ICreateTransactionUseCase) {}
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const { email } = req.body;
      const { value, paid, contact, category } = req.body;

      if (!email && !value && !paid && contact.name && category.name)
        throw new BadRequestError('you dont send parameters necessary');

      const transaction = await this.transactionUseCase.execute(req.body);

      if (!transaction) throw new DataBaseError('somenthing is wrong in Database');

      return created(transaction);
    } catch (error: any) {
      if (badRequest(error)) return badRequest(error);
      return serverError(error);
    }
  }
}
