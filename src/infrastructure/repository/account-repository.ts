import { PrismaClient } from '@prisma/client';
import { IAccount } from '../../domain/entity/account';
import { Account } from '../../domain/models/entities/account';
import { IAccountRepository } from '../../domain/repository/IAcountRepository';

export class AccountRepository implements IAccountRepository {
  constructor(private readonly prisma: PrismaClient) {}

  public static createClient(prismaClient: PrismaClient) {
    return new AccountRepository(prismaClient);
  }

  async create(data: Account): Promise<IAccount | null> {
    const account = await this.prisma.account.create({ data: data });
    return account;
  }

  async getUnique(email: string): Promise<any> {
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
      data: data,
    });

    return account;
  }

  async newBalance(email: string, newBalance: number): Promise<any> {
    const updateAccount = await this.prisma.account.update({
      where: { email: email },
      data: { balance: newBalance },
    });

    return updateAccount;
  }
}
