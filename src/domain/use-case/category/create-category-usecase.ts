import { ICategory, TypeCategory } from '../../entity/category';
import { IUseCase } from '../usecase';

export interface CreateCategoryInput {
  type: TypeCategory;
  isActive: boolean;
  name: string;
}

export type CreateCategoryOutPut = { account: ICategory };

export abstract class ICreateCategoryUseCase implements IUseCase<CreateCategoryInput, CreateCategoryOutPut> {
  abstract execute(input: CreateCategoryInput): Promise<CreateCategoryOutPut>;
}
