import { Account } from "../models/account";
import { IRepositoryBase } from "./IRepositoryBase";

export interface CreateAccountOutput {
  name: string;
}

export interface GetAccount {
  email: string;
}

export interface GetAccount {
  email: string;
}

export abstract class IAccountRepository implements IRepositoryBase<Account | null> {
  abstract update(email: string, data: any): Promise<any>;
  abstract getUnique(email: string): Promise<Account | null>;

  abstract get(input: string): Promise<any>;

  abstract getMany(input: any): Promise<any>;

  abstract create(data: Account): Promise<Account>;
}
