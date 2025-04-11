// src/users/testing/user-fake-builder.ts

import { ITransaction } from '../../src/domain/entity/transaction';
import { Account } from '../../src/domain/models/entities/account';
import { Transaction } from '../../src/domain/models/entities/transaction';
import { FakeBuilder, PropOrFactory } from './fake-builder';


type UserRole = 'admin' | 'user' | 'guest';


export class AccountFakeBuilder<TBuild = Account | Account[]> extends FakeBuilder<TBuild> {
  [x: string]: any;
    
  
  private _name: PropOrFactory<string> = (index) => `Account ${index + 1}`;
  private _email: PropOrFactory<string> = (index) => `user${index + 1}@example.com`;
  private _password: PropOrFactory<string> = () => 'Password123!';
  private _balance: PropOrFactory<number> = () =>  Math.floor(Math.random() * 50) + 18;
  private _token: PropOrFactory<number> = () => Math.floor(Math.random() * 50) + 18;
  private _transaction: PropOrFactory<Transaction[]> = () => [];
 

  

  private constructor(countObjs: number = 1) {
    super(countObjs);
  }

  static aAccount(): AccountFakeBuilder<Account> {
    return new AccountFakeBuilder<Account>();
  }

  static theAccount(count: number): AccountFakeBuilder<Account[]> {
    return new AccountFakeBuilder<Account[]>(count);
  }



  withName(name: string): AccountFakeBuilder<TBuild>  {
    this._name = name;
    return this;
  }

  withEmail(email: string): AccountFakeBuilder<TBuild> {
    this._email = email;
    return this;
  }

  withPassword(password: string): AccountFakeBuilder<TBuild>  {
    this._password = password;
    return this;
  }

  withToken(token: number): AccountFakeBuilder<TBuild> {
    this._token = token;
    return this;
  }

  withTransaction(transaction: Transaction[]): AccountFakeBuilder<TBuild>  {
    this._transaction = transaction;
    return this;
  }
  withBalance(balance: number): AccountFakeBuilder<TBuild> {
    this._balance = balance;
    return this;
  }
 
 

  protected generateMock(index: number): Account {
    return {
      name: this._callFactory(this._name, index) as string,
      email: this._callFactory(this._name, index) as string,
      balance: this._callFactory(this._balance, index) as number,
      password: this._callFactory(this._name, index) as string,
      transaction: this._callFactory(this._name, index) as unknown as ITransaction,
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