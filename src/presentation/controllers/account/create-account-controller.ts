import { Request } from 'express';
import { BadRequestError } from '../../../data-layer/errors/bad-request-error';
import { ICreateAccountUseCase } from '../../../domain/use-case/account/create-account-usecase';
import { Controller } from '../../protocols/controller';
import { HttpResponse } from '../../protocols/http';
import { badRequest, ok, serverError } from '../../response/helper';

export class CreateAccountController implements Controller {
  constructor(private readonly accountUsecase: ICreateAccountUseCase) {}
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const { name, email, password, balance } = req.body;
      if (!name && !email && !password) {
        throw new BadRequestError('You dont send some parameters');
      }
      if (balance > 0) new BadRequestError('You dont send balance more than 0');
      const creatingAccount = await this.accountUsecase.execute(req.body);

      return ok(creatingAccount);
    } catch (error: any) {
      if (badRequest(error)) return badRequest(error);
      return serverError(error);
    }
  }
}
