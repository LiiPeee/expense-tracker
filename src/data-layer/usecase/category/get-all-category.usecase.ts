import { ICategoryRepository } from '../../../domain/repository/ICategoryRepository';
import { IGetAllCategoryUseCase } from '../../../domain/use-case/category/get-all-category-usecase';

export class GetAllCategoryUseCase implements IGetAllCategoryUseCase {
  constructor(private readonly _categoryRepository: ICategoryRepository) {}

  async execute(): Promise<any> {
    const category = await this._categoryRepository.getMany();
    return category;
  }
}
