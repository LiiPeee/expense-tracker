// src/users/testing/user-fake-builder.ts

import { Category } from "../../src/domain/models/entities/category";
import { Transaction } from "../../src/domain/models/entities/transaction";

import { FakeBuilder, PropOrFactory } from "./fake-builder";
import { TransactionFakeBuilder } from "./transaction-fake";

export class CategoryFakeBuilder<TBuild = Category | Category[]> extends FakeBuilder<TBuild> {
  private _name: PropOrFactory<string> = this._chance.string();
  private _transactions: PropOrFactory<Transaction[]> = () => [
    TransactionFakeBuilder.aTransaction().build(),
    TransactionFakeBuilder.aTransaction().build(),
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

  build(): TBuild {
    const category: Category[] = Array.from({ length: this._countObjs }).map(() => {
      const category = new Category();

      ca.name = this._callFactory(this._name) as string;
      account.email = this._callFactory(this._email) as string;
      account.balance = this._callFactory(this._balance) as number;
      account.password = this._callFactory(this._password) as string;
      account.token = this._callFactory(this._token) as string;
      return account;
    });

    return (this._countObjs === 1 ? account[0] : account) as TBuild;
  }
}
