import { Account } from "../entity/account";
import { InputCreateAccount } from "../inputAndOutput";
import { IRepositoryBase } from "./IRepositoryBase";

export interface CreateAccountOutput {
  name: string;
  balance: number;
}

export abstract class IAccountRepository implements IRepositoryBase<Account> {
  get(input: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  getMany(input: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  abstract create(data: InputCreateAccount): Promise<CreateAccountOutput>;
}
