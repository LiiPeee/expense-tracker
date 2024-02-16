import { Document, Model } from "mongoose";
import { IAccount } from "../model/account";
import { IAccountRepository } from "./interface/IAcountRepository";

export class AccountRepository implements IAccountRepository {
  constructor(private account: Model<IAccount & Document>) {}
  async createAccout(data: any): Promise<IAccount | any> {
    const result = this.account.create(data);
    return result;
  }
  // async findById(data: any): Promise<IAccount | any> {
  //   const { name, password } = data;

  //   const getUser = prisma.account.findFirst({
  //     where: { OR: [{ name }, { password }] },
  //   });

  //   return getUser;
  // }
}
