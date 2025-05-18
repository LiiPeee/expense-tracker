import { Request } from 'express';
import { IGetAllContactUseCase } from '../../../domain/use-case/contact/get-contact-usecase';
import { DataBaseError } from '../../../infrastructure/errors/data-base-error';
import { Controller } from '../../protocols/controller';
import { HttpResponse } from '../../protocols/http';
import { badRequest, created, serverError } from '../../response/helper';

export class GetAllContactController implements Controller {
  constructor(private readonly contactUseCase: IGetAllContactUseCase) {}
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const contact = await this.contactUseCase.execute();

      if (!contact) throw new DataBaseError('somenthing is wrong in Database');

      return created(contact);
    } catch (error: any) {
      if (badRequest(error)) return badRequest(error);
      return serverError(error);
    }
  }
}
