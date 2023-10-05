import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export class AccountRepository{


    async createAccout(data: any){
        const accountData: any ={
            name: data.name,
            password: data.password,
            balance: data.balance
        }

        const account = await prisma.account.create({ data: accountData});

        return account;

    }

    
}