import { IEntityBase } from './entity'

export interface ICategory extends IEntityBase {
    name: string
    type: TypeCategory
    is_active: boolean
}

export enum TypeCategory {
    expense,
    income,
}
