import { IAccount } from '../entity/account';
import { Account } from '../models/entities/account';

export interface CreateAccountOutput {
  name: string;
}

export interface GetAccount {
  email: string;
}

export interface GetAccount {
  email: string;
}

export abstract class IAccountRepository {
  abstract update(email: string, data: any): Promise<any>;

  abstract getWithEmail(email: string): Promise<Account>;

  abstract create(data: IAccount): Promise<IAccount>;

  abstract getAccountWithTransaction(email: string): Promise<any>;

  abstract newBalance(email: string, newBalance: number): Promise<any>;

  abstract getWithId(id: string): Promise<Account>;
}
