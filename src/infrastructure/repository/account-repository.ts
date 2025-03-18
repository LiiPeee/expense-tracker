import { PrismaClient } from "@prisma/client";
import { InputCreateAccount } from "../../domain/inputAndOutput";
import { Account } from "../../domain/models/account";
import {
  IAccountRepository
} from "../../domain/repository/IAcountRepository";
export class AccountRepository implements IAccountRepository {
  constructor(private readonly prisma: PrismaClient) { }

  public static createClient(prismaClient: PrismaClient) {
    return new AccountRepository(prismaClient);
  }

  async create(data: InputCreateAccount): Promise<Account> {
    const account = await this.prisma.account.create({ data });
    return account;
  }

  async getUnique(email: string): Promise<Account | null> {
    return await this.prisma.account.findUnique({
      where: {
        email: email,
      },
    });

  }

  async update(email: string, data: any): Promise<any> {
    const account = await this.prisma.account.update({
      where: {
        email: email,
      },
      data: data
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

  async getMany(input: any): Promise<any> {
    return await this.prisma.account.findMany()
  }
}
