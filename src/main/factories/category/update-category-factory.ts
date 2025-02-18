import { UpdateCategoryUseCase } from "../../../data/usecase/category/update-category.usecase";
import { CategoryRepository } from "../../../infrastructure/repository/category-repository";
import { UpdateCategoryController } from "../../../presentation/controllers/category/update-category-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { validatePrisma } from "../../package/prisma";


export const makeUpdateCategoryFactory = async (): Promise<Controller> => {
    const prisma = await validatePrisma();
    const categoryRepository = CategoryRepository.createClient(prisma);
    const useCase = new UpdateCategoryUseCase(
        categoryRepository,
    );
    const controller = new UpdateCategoryController(useCase);
    return controller;
};
