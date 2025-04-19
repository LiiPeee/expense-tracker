import { Category } from "../../../domain/models/entities/category";
import { ICategoryRepository } from "../../../domain/repository/ICategoryRepository";
import {
  CreateCategoryInput,
  CreateCategoryOutPut,
  ICreateCategoryUseCase,
} from "../../../domain/use-case/category/create-category-usecase";

export class CreateCategoryUseCase implements ICreateCategoryUseCase {
  constructor(private readonly _categoryRepository: ICategoryRepository) {}
  async execute(input: CreateCategoryInput): Promise<CreateCategoryOutPut> {
    const newCategory = new Category();

    const category = await this._categoryRepository.create(newCategory);

    return category;
  }
}
