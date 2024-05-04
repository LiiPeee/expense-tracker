import { Account, PrismaClient } from "@prisma/client";
import { IAccountRepository } from "../../domain/repository/interface/IAcountRepository";
import {
  InputCreateAccount,
  InputFindAccount,
} from "../../domain/repository/interface/inputs";

export class AccountRepository implements IAccountRepository {
  private prisma = new PrismaClient();

  async createAccout(data: InputCreateAccount): Promise<void> {
    await this.prisma.account.create({ data });
  }

  async findByEmail(data: InputFindAccount): Promise<Account | null> {
    const account = await this.prisma.account.findUnique({
      where: {
        email: data.email,
      },
    });

    return account;
  }
}
