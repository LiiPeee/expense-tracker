import { ICategory } from '../../entity/category';
import { IUseCase } from '../usecase';
import { GetCategoryInput } from './get-category-usecase';

export type GetCategoryOutPut = { account: ICategory };

export abstract class IGetAllCategoryUseCase implements IUseCase<GetCategoryInput, any> {
  abstract execute(input: GetCategoryInput): Promise<GetCategoryOutPut>;
}
