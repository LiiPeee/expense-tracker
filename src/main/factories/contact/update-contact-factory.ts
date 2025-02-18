import { UpdateContactUseCase } from "../../../data/usecase/contact/update-account.usecase";
import { ContactRepository } from "../../../infrastructure/repository/contact-repository";
import { UpdateContactController } from "../../../presentation/controllers/contact/update-contact-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { validatePrisma } from "../../package/prisma";


export const makeUpdateContactFactory = async (): Promise<Controller> => {
    const prisma = await validatePrisma();
    const contactRepository = ContactRepository.createClient(prisma);
    const useCase = new UpdateContactUseCase(
        contactRepository,
    );
    const controller = new UpdateContactController(useCase);
    return controller;
};
