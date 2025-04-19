import { ICategory } from "../../entity/category";
import { IUseCase } from "../usecase";

export interface CreateCategoryInput {
  name: string;
  email: string;
  balance?: number;
  password: string;
}
export type CreateCategoryOutPut = { account: ICategory };

export abstract class ICreateCategoryUseCase implements IUseCase<CreateCategoryInput, CreateCategoryOutPut> {
  abstract execute(input: CreateCategoryInput): Promise<CreateCategoryOutPut>;
}
