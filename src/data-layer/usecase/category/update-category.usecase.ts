import { ICategoryRepository } from "../../../domain/repository/ICategoryRepository";
import { IUseCase } from "../../../domain/use-case/usecase";
export interface UpdateInput {
  id: number;
  data: any;
}
export class UpdateCategoryUseCase implements IUseCase<UpdateInput, any> {
  constructor(private readonly _categoryRepository: ICategoryRepository) {}
  async execute(input: UpdateInput): Promise<any> {
    const account = await this._categoryRepository.update(input.id, input.data);
    return account;
  }
}
