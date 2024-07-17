import { GetTransactionUseCase } from "../../../data/usecase/transaction/get-transaction.usecase";
import { TransactionRepository } from "../../../infrastructure/repository/transaction-repository";
import { GetTransactionController } from "../../../presentation/controllers/transaction/get-transaction-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { validatePrisma } from "../../package/prisma";

export const makeGetTransactionController = async (): Promise<Controller> => {
    const prisma = await validatePrisma()
    const repository = new TransactionRepository(prisma)
    const usecase = new GetTransactionUseCase(repository);

    const controller = new GetTransactionController(usecase);

    return controller;
}