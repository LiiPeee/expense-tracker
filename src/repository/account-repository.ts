import { Document, Model } from "mongoose";
import { IAccount } from "../model/account/account";
import { IAccountRepository } from "./interface/IAcountRepository";

export class AccountRepository implements IAccountRepository {
  constructor(private account: Model<IAccount & Document>) {}
  async createAccout(data: any): Promise<IAccount | any> {
    const result = this.account.create(data);
    return result;
  }
  async findById(_id: any): Promise<IAccount | any> {
    const getUser = this.account.findById({ _id });
    return getUser;
  }
}
