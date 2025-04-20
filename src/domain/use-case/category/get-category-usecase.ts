import { ICategory } from "../../entity/category";
import { IUseCase } from "../usecase";

export interface GetCategoryInput {
  name: string;
}
export type GetCategoryOutPut = { account: ICategory };

export abstract class IGetCategoryUseCase implements IUseCase<GetCategoryInput, GetCategoryOutPut> {
  abstract execute(input: GetCategoryInput): Promise<GetCategoryOutPut>;
}
