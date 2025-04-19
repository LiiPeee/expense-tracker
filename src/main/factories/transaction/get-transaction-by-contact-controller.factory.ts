import { GetTransactionByContact } from "../../../data-layer/usecase/contact/get-transaction-by-contact";
import { ContactRepository } from "../../../infrastructure/repository/contact-repository";
import { GetTransactionByContactController } from "../../../presentation/controllers/transaction/get-transaction-by-contact-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { validatePrisma } from "../../package/prisma";

export const makeGetTransactionByContactController = async (): Promise<Controller> => {
  const prisma = await validatePrisma();

  const repository = new ContactRepository(prisma);

  const usecase = new GetTransactionByContact(repository);

  const controller = new GetTransactionByContactController(usecase);

  return controller;
};
