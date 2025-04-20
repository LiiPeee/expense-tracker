import { ICategoryRepository } from "../../../domain/repository/ICategoryRepository";
import { GetCategoryInput, IGetCategoryUseCase } from "../../../domain/use-case/category/get-category-usecase";

export class GetCategoryUseCase implements IGetCategoryUseCase {
  constructor(private readonly _categoryRepository: ICategoryRepository) {}

  async execute(input: GetCategoryInput): Promise<any> {
    const account = await this._categoryRepository.getByName(input.name);
    return account;
  }
}
