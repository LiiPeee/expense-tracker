import { DeleteCategoryUseCase } from "../../../data/usecase/category/delete-category.usecase";
import { CategoryRepository } from "../../../infrastructure/repository/category-repository";
import { DeleteCategoryController } from "../../../presentation/controllers/category/delete-category-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { validatePrisma } from "../../package/prisma";


export const makeDeleteCategoryFactory = async (): Promise<Controller> => {
    const prisma = await validatePrisma();
    const categoryRepository = CategoryRepository.createClient(prisma);
    const useCase = new DeleteCategoryUseCase(
        categoryRepository,
    );
    const controller = new DeleteCategoryController(useCase);
    return controller;
};
