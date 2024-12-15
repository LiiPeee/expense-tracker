import { GetTransactionByContact } from "../../../data/usecase/transaction/get-transaction-by-contact";
import { TransactionRepository } from "../../../infrastructure/repository/transaction-repository";
import { GetTransactionByContactController } from "../../../presentation/controllers/transaction/get-transaction-by-contact-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { validatePrisma } from "../../package/prisma";

export const makeGetTransactionByContactController = async (): Promise<Controller> => {
    const prisma = await validatePrisma();

    const repository = new TransactionRepository(prisma);

    const usecase = new GetTransactionByContact(repository);

    const controller = new GetTransactionByContactController(usecase);

    return controller;
}