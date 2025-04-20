// import { DeleteContactUseCase } from "../../../data-layer/usecase/contact/delete-account.usecase";
// import { ContactRepository } from "../../../infrastructure/repository/contact-repository";
// import { DeleteContactController } from "../../../presentation/controllers/contact/delete-contact-controller";
// import { Controller } from "../../../presentation/protocols/controller";
// import { validatePrisma } from "../../package/prisma";

// export const makeDeleteContactFactory = async (): Promise<Controller> => {
//     const prisma = await validatePrisma();
//     const contactRepository = ContactRepository.createClient(prisma);
//     const useCase = new DeleteContactUseCase(
//         contactRepository,
//     );
//     const controller = new DeleteContactController(useCase);
//     return controller;
// };
