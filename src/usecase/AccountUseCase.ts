import { Account } from "@prisma/client";
import { AccountRepository } from "../repository/AccountRepository";
import bcrypt from "bcrypt"


export class AccountUseCase {
    public accountRespository: AccountRepository;
    constructor(accountRespository: AccountRepository) {
        this.accountRespository = accountRespository;
    }

    async createAccount(data: any): Promise<Account> {

        const { name, email, password, balance } = data
        const hashPassword =  await bcrypt.hash(password, 10)
        const account = await this.accountRespository.createAccout({ name, email, password: hashPassword, balance });

        const {password: _, ...user} = account;

        return user;
    }
}