import { CreateCategoryUseCase } from "../../../data-layer/usecase/category/create-category.usecase";
import { CategoryRepository } from "../../../infrastructure/repository/category-repository";
import { CreateCategoryController } from "../../../presentation/controllers/category/create-category-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { validatePrisma } from "../../package/prisma";


export const makeCreateCategoryFactory = async (): Promise<Controller> => {
    const prisma = await validatePrisma();
    const categoryRepository = CategoryRepository.createClient(prisma);
    const useCase = new CreateCategoryUseCase(
        categoryRepository,
    );
    const controller = new CreateCategoryController(useCase);
    return controller;
};
