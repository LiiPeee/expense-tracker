import { IEntityBase } from "../entity/entity";
import { Transaction } from "../models/entities/transaction";

export interface ICategory extends IEntityBase {
    name: string
    transactions: Transaction[];
}