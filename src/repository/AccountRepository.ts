import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"
import { Account } from "../model/Account";

const prisma = new PrismaClient();
export class AccountRepository {
    async createAccout(data: any): Promise<Account> {
        const { name, email, balance } = data;
        const password = data?.password
        const account = await prisma.account.create({ data: { name, email, password, balance } });

        return account;

    }


}