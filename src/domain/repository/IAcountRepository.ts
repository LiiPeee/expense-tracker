import { IAccount } from "../entity/account";
import { Account } from "../models/entities/account";

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

  abstract getUnique(email: string): Promise<any>;


  abstract getMany(input: any): Promise<any>;

  abstract create(data: IAccount): Promise<Account>;
}
