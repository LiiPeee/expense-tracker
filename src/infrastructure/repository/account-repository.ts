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
    // if (!account) throw new DataBaseError("Somenthing wrong in create in DB");
    return account;
  }

  async getUnique(input: string): Promise<Account | null> {
    return await this.prisma.account.findUnique({
      where: {
        email: input,
      },
    });

  }

<<<<<<< HEAD
  async get(email: string): Promise<any> {
=======
  async getUnique(email: string): Promise<any> {
>>>>>>> 6834eb4 (feat: i did some refactor and i put cron job in the code and start cron-job in transaction)
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
<<<<<<< HEAD
        ...data,
=======
        token: data,
>>>>>>> 6834eb4 (feat: i did some refactor and i put cron job in the code and start cron-job in transaction)
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
