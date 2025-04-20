import { CreateContactUseCase } from '../../../data-layer/usecase/contact/create-contact.usecase';
import { AddressRepository } from '../../../infrastructure/repository/address-repository';
import { ContactRepository } from '../../../infrastructure/repository/contact-repository';
import { CreateContactController } from '../../../presentation/controllers/contact/create-contact-controller';
import { Controller } from '../../../presentation/protocols/controller';
import { validatePrisma } from '../../package/prisma';

export const makeCreateContactFactory = async (): Promise<Controller> => {
  const prisma = await validatePrisma();
  const contactRepository = ContactRepository.createClient(prisma);
  const addressRepository = AddressRepository.createClient(prisma);

  const useCase = new CreateContactUseCase(contactRepository, addressRepository);
  const controller = new CreateContactController(useCase);
  return controller;
};
