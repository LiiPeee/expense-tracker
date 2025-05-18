import { Request } from 'express';

import { ICreateOrganizationUseCase } from '../../../domain/use-case/organization/create-organization-usecase';
import { BadRequestError } from '../../../infrastructure/errors/bad-request-error';
import { Controller } from '../../protocols/controller';
import { HttpResponse } from '../../protocols/http';
import { badRequest, ok, serverError } from '../../response/helper';

export class CreateOrganizationController implements Controller {
  constructor(private readonly createOrganizationUseCase: ICreateOrganizationUseCase) {}
  async handle(req: Request): Promise<HttpResponse> {
    try {
      if (!req.body.name && req.body.email) throw new BadRequestError('name or email didnt send');

      const organization = await this.createOrganizationUseCase.execute(req.body);

      return ok(organization);
    } catch (error: any) {
      if (badRequest(error)) return badRequest(error);
      return serverError(error);
    }
  }
}
