import { PrismaClient } from "@prisma/client";
import { Account } from "../../domain/entity/account";
import { InputCreateAccount } from "../../domain/inputAndOutput";
import { CreateAccountOutput } from "../../domain/repository/IAcountRepository";
import { IRepositoryBase } from "../../domain/repository/IRepositoryBase";
export class AccountRepository implements IRepositoryBase<Account> {
  constructor(private readonly prisma: PrismaClient) {}
  async create(data: InputCreateAccount): Promise<CreateAccountOutput> {
    return await this.prisma.account.create({ data });
  }
  async get(input: string): Promise<Account | null> {
    const account = await this.prisma.account.findUnique({
      where: {
        email: input,
      },
    });

    return account;
  }

  async newBalance(email: string, newBalance: number): Promise<Account> {
    const updateAccount = await this.prisma.account.update({
      where: { email: email },
      data: { balance: newBalance },
    });

    return updateAccount;
  }

  getMany(input: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
