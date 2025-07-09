
import { Account } from "../../src/domain/models/entities/account";
import { Transaction } from "../../src/domain/models/entities/transaction";
import { FakeBuilder, PropOrFactory } from './fake-builder';

export class AccountFakeBuilder<TBuild = Account | Account[]> extends FakeBuilder<TBuild> {
  [x: string]: any;

  private _name: PropOrFactory<string> = this._chance.string();
  private _email: PropOrFactory<string> = this._chance.email();
  private _password: PropOrFactory<string> = this._chance.string();
  private _balance: PropOrFactory<number> = 0;
  private _token: PropOrFactory<string> = this._chance.string();

  private constructor(countObjs: number = 1) {
    super(countObjs);
  }

  static aAccount(): AccountFakeBuilder<Account> {
    return new AccountFakeBuilder<Account>();
  }

  static theAccount(count: number): AccountFakeBuilder<Account[]> {
    return new AccountFakeBuilder<Account[]>(count);
  }

  withName(name: string): AccountFakeBuilder<TBuild> {
    this._name = name;
    return this;
  }

  withEmail(email: string): AccountFakeBuilder<TBuild> {
    this._email = email;
    return this;
  }

  withPassword(password: string): AccountFakeBuilder<TBuild> {
    this._password = password;
    return this;
  }

  withToken(token: string): AccountFakeBuilder<TBuild> {
    this._token = token;
    return this;
  }

  withTransaction(transaction: Transaction[]): AccountFakeBuilder<TBuild> {
    this._transaction = transaction;
    return this;
  }
  withBalance(balance: number): AccountFakeBuilder<TBuild> {
    this._balance = balance;
    return this;
  }

  build(): TBuild {
    const account: Account[] = Array.from({ length: this._countObjs }).map(() => {
      const account = new Account();

      account.name = this._callFactory(this._name) as string;
      account.email = this._callFactory(this._email) as string;
      account.balance = this._callFactory(this._balance) as number;
      account.password = this._callFactory(this._password) as string;
      account.token = this._callFactory(this._token) as string;
      return account;
    });

    return (this._countObjs === 1 ? account[0] : account) as TBuild;
  }
}
