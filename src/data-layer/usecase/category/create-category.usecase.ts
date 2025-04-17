import { Category } from "@/domain/models/entities/category";
import { CreateCategoryInput, CreateCategoryOutPut, ICreateCategoryUseCase } from "@/domain/use-case/category/create-category-usecase";
import { ICategoryRepository } from "../../../domain/repository/ICategoryRepository";

export class CreateCategoryUseCase implements ICreateCategoryUseCase{

    constructor(private readonly _categoryRepository: ICategoryRepository) {
    }
    async execute(input: CreateCategoryInput): Promise<CreateCategoryOutPut> {

        const newCategory = new Category({name: input.name});
        const category = await this._categoryRepository.create(newCategory);
        return category;

    }

}