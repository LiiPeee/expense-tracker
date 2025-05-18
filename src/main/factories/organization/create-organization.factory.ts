import { CreateOrganizationUseCase } from '../../../data-layer/usecase/organization/create-organization.usecase';
import { OrganizationRepository } from '../../../infrastructure/repository/organization-repository';
import { CreateOrganizationController } from '../../../presentation/controllers/organization/create-organization.controller';
import { Controller } from '../../../presentation/protocols/controller';
import { validatePrisma } from '../../package/prisma';

export const makeCreateOrganizationFactory = async (): Promise<Controller> => {
  const prisma = await validatePrisma();
  const organizationRepository = OrganizationRepository.createClient(prisma);

  const useCase = new CreateOrganizationUseCase(organizationRepository);
  const controller = new CreateOrganizationController(useCase);
  return controller;
};
