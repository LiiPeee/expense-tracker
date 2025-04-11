import { Category } from "@/domain/models/entities/category";
import { ICategory } from "../../../domain/dto/category";
import { ICategoryRepository, InputCategory } from "../../../domain/repository/ICategoryRepository";
import { IUseCase } from "../../../domain/use-case/usecase";

export class CreateCategoryUseCase implements IUseCase<InputCategory, any> {

    constructor(private readonly _categoryRepository: ICategoryRepository) {
    }
    async execute(input: any): Promise<ICategory> {

        const newCategory = new Category(input);
        const category = await this._categoryRepository.create(newCategory);
        return category;

    }

}