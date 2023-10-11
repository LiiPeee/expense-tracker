import { PrismaClient } from "@prisma/client";
import { Account } from "../model/Account";
import { IAccountRepository } from "./interface/IAcountRepository";

const prisma = new PrismaClient();
export class AccountRepository implements IAccountRepository {
    async createAccout(data: any): Promise<Account | any> {
        const { name, email, balance } = data;
        const password = data?.password
        const account = await prisma.account.create({ data: { name, email, password, balance } });

        return account;

    }
    async findById(data: any): Promise<Account | any> {
        const { name, password } = data;

        const getUser = prisma.account.findFirst({ where: { OR: [{ name }, { password }] } })

        return getUser;
    }


}