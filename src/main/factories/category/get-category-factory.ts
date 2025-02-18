import { GetCategoryUseCase } from "../../../data/usecase/category/get-category.usecase";
import { CategoryRepository } from "../../../infrastructure/repository/category-repository";
import { GetCategoryController } from "../../../presentation/controllers/category/get-category-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { validatePrisma } from "../../package/prisma";


export const makeGetCategoryFactory = async (): Promise<Controller> => {
    const prisma = await validatePrisma();
    const categoryRepository = CategoryRepository.createClient(prisma);
    const useCase = new GetCategoryUseCase(
        categoryRepository,
    );
    const controller = new GetCategoryController(useCase);
    return controller;
};
