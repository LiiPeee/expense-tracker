import { GetAllContactUseCase } from '../../../data-layer/usecase/contact/get-account.usecase';
import { ContactRepository } from '../../../infrastructure/repository/contact-repository';
import { GetAllContactController } from '../../../presentation/controllers/contact/get-contact-controller';
import { Controller } from '../../../presentation/protocols/controller';
import { validatePrisma } from '../../package/prisma';

export const makeGetContactFactory = async (): Promise<Controller> => {
  const prisma = await validatePrisma();
  const contactRepository = ContactRepository.createClient(prisma);
  const useCase = new GetAllContactUseCase(contactRepository);
  const controller = new GetAllContactController(useCase);
  return controller;
};
