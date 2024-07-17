import { PrismaClient } from "@prisma/client";
import { Account } from "../../domain/entity/account";
import { InputCreateAccount } from "../../domain/inputAndOutput";
import {
  CreateAccountOutput,
  IAccountRepository,
} from "../../domain/repository/IAcountRepository";
export class AccountRepository implements IAccountRepository {
  constructor(private readonly prisma: PrismaClient) { }

  public static createClient(prismaClient: PrismaClient) {
    return new AccountRepository(prismaClient);
  }

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

  async getUnique(email: string): Promise<any> {
    const account = await this.prisma.account.findFirst({
      where: {
        email,
      },
    });

    return account;
  }
  async update(email: string, data: any): Promise<any> {
    const account = await this.prisma.account.update({
      where: {
        email: email,
      },
      data: {
        ...data,
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
