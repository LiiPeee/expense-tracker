import { IEntityBase } from "./entity";

export interface ICategoryBehavior {
  setName(name: string): ICategoryBehavior;
  setType(type: TypeCategory): ICategoryBehavior;
  setIsActive(isActive: boolean): ICategoryBehavior;
}

export interface ICategory extends IEntityBase {
  name: string;
  type: TypeCategory;
  isActive: boolean;
}

export enum TypeCategory {
  expense = "expense",
  income = "income",
}
