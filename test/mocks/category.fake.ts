// src/users/testing/user-fake-builder.ts

import { Category } from "../../src/domain/models/entities/category";
import { Transaction } from "../../src/domain/models/entities/transaction";

import { FakeBuilder, PropOrFactory } from './fake-builder';
import { TransactionFakeBuilder } from './transaction-fake';



export class CategoryFakeBuilder<TBuild = Category | Category[]> extends FakeBuilder<TBuild> {


  private _name: PropOrFactory<string> = (index) => `${index + 1}`;
  private _transactions: PropOrFactory<Transaction[]> = () => [
    TransactionFakeBuilder.aTransaction().build(),
    TransactionFakeBuilder.aTransaction().build()
  ];



  private constructor(countObjs: number = 1) {
    super(countObjs);
  }

  static aCategory(): CategoryFakeBuilder<Category> {
    return new CategoryFakeBuilder<Category>();
  }

  static theCategory(count: number): CategoryFakeBuilder<Category[]> {
    return new CategoryFakeBuilder<Category[]>(count);
  }



  withName(name: string): CategoryFakeBuilder<TBuild> {
    this._name = name;
    return this;
  }

  withTransaction(transaction: Transaction[]): CategoryFakeBuilder<TBuild> {
    this._transactions = transaction;
    return this;
  }



  protected generateMock(index: number): Category {
    return {
      name: this._callFactory(this._name, index) as string,
      transactions: this._callFactory(this._transactions, index) as unknown as Transaction[]
    };
  }

  build(): TBuild {
    if (this._countObjs === 1) {
      return this.generateMock(0) as TBuild;
    }

    const items = Array.from({ length: this._countObjs }, (_, i) => this.generateMock(i));
    return items as TBuild;
  }
}