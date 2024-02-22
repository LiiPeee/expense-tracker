import { PrismaClient } from "@prisma/client";
import { IAccount } from "../entity/account/account";
import { IAccountRepository } from "./interface/IAcountRepository";

export class AccountRepository implements IAccountRepository {
  private prisma = new PrismaClient();
  async createAccout(data: any): Promise<IAccount | any> {
    const result = await this.prisma.account.create({ data });
    return result;
  }
  // async findById(_id: any): Promise<IAccount | any> {
  //   const getUser = this.account.findById({ _id });
  //   return getUser;
  // }
}
