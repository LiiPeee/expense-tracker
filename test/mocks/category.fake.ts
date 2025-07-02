// src/users/testing/user-fake-builder.ts

import { ICategory } from "../../src/domain/entity/category";
import { Category } from "../../src/domain/models/entities/category";
import { Transaction } from "../../src/domain/models/entities/transaction";

import { FakeBuilder, PropOrFactory } from "./fake-builder";
import { TransactionFakeBuilder } from "./transaction-fake";

export class CategoryFakeBuilder<TBuild = ICategory | ICategory[]> extends FakeBuilder<TBuild> {


  private constructor(countObjs: number = 1) {
    super(countObjs);
  }

  static aCategory(): CategoryFakeBuilder<ICategory> {
    return new CategoryFakeBuilder<ICategory>();
  }

  static theCategory(count: number): CategoryFakeBuilder<ICategory[]> {
    return new CategoryFakeBuilder<ICategory[]>(count);
  }



  build(): TBuild {
    const category: Category[] = Array.from({ length: this._countObjs }).map(() => {
      const category = new Category();

      category.name = this._callFactory(this._name) as string;
      category.createdAt = this._callFactory(this._createdAt) as Date;
      category.id = this._callFactory(this._id) as string;
      category.type = this._callFactory(this._type) as string;
      category.token = this._callFactory(this._token) as string;
      return category;
    });

    return (this._countObjs === 1 ? account[0] : account) as TBuild;
  }
}
