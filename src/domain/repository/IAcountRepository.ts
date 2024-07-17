import { InputCreateAccount } from "../inputAndOutput";
import { Account } from "../models/account";
import { IRepositoryBase } from "./IRepositoryBase";

export interface CreateAccountOutput {
  name: string;
  balance: number;
}

export interface GetAccount {
  email: string;
}

export abstract class IAccountRepository implements IRepositoryBase<Account> {
  abstract update(email: string, data: any): Promise<any>;
  abstract getUnique(email: string): Promise<any>;

  abstract get(input: string): Promise<any>;

  abstract getMany(input: any): Promise<any>;

  abstract create(data: InputCreateAccount): Promise<CreateAccountOutput>;
}
