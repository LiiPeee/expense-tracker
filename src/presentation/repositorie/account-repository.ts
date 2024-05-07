import { Account, PrismaClient } from "@prisma/client";
import { InputCreateAccount } from "../../domain/inputAndOutput";
import { IAccountRepository } from "../../domain/repository/interface/IAcountRepository";

export class AccountRepository implements IAccountRepository {
  private prisma = new PrismaClient();

  async createAccout(data: InputCreateAccount): Promise<void> {
    await this.prisma.account.create({ data });
  }

  async findByEmail(data: string): Promise<Account | null> {
    const account = await this.prisma.account.findUnique({
      where: {
        email: data,
      },
    });

    return account;
  }
}
