import { Account } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AccountRepository } from "../repository/AccountRepository";


export class AccountUseCase {
    public accountRespository: AccountRepository;
    constructor(accountRespository: AccountRepository) {
        this.accountRespository = accountRespository;
    }

    async createAccount(data: any): Promise<Account> {

        const { name, email, password, balance } = data
        const hashPassword = await bcrypt.hash(password, 10)
        const account = await this.accountRespository.createAccout({ name, email, password: hashPassword, balance });

        const { password: _, ...user } = account;

        return user;
    }
    async login(data: any): Promise<Account | any> {
        const { name, password } = data

        const getUser = await this.accountRespository.findById({ name, password })

        const verifyPass = bcrypt.compare(password, getUser.password)
        if (!verifyPass) {
            throw new Error('Invalid password')
        }
        const token = await jwt.sign({ id: getUser.id, name: getUser.name }, "seilatest")

        return getUser;

    }
} 
