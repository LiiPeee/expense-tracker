import { Account } from "@prisma/client";
import { InputCreateAccount } from "../../src/domain/inputAndOutput";

let account = {
    id: 1,
    endDate: null,
    createDate: "18/12/1999",
    name: 'any_name',
    email: 'any_email',
    balance: 1235547999884,
    password: 'any_password'
}

export class AccountRepositoryMock {

    async create(data: InputCreateAccount): Promise<Account> {
        return {
            id: 1,
            endDate: null,
            createDate: new Date('18/12/1999'),
            name: 'any_name',
            email: 'any_email',
            balance: 1235547999884,
            password: 'any_password'
        }
    }

    async getUnique(input: string): Promise<Account | null> {
        return {
            id: 1,
            endDate: null,
            createDate: new Date('18/12/1999'),
            name: 'any_name',
            email: 'any_email',
            balance: 1235547999884,
            password: 'any_password'
        }

    }


    async update(email: string, data: any): Promise<any> {
        email
        return {
            id: 1,
            endDate: null,
            createDate: new Date('18/12/1999'),
            name: data.name,
            email: email,
            balance: data.balance,
            password: data.password
        }
    }
    async newBalance(email: string, newBalance: number) {
        return {
            email: email,
            balance: newBalance,
        };
    }

    async getMany(input: any): Promise<any> {
        return [{
            id: 1,
            endDate: null,
            createDate: new Date('18/12/1999'),
            name: 'any_name',
            email: 'any_email',
            balance: 1235547999884,
            password: 'any_password',

        },
        {
            id: 2,
            endDate: null,
            createDate: new Date('18/12/1998'),
            name: 'any_name',
            email: 'any_email',
            balance: 1235547999884,
            password: 'any_password',

        },
        {
            id: 3,
            endDate: null,
            createDate: new Date('18/12/1997'),
            name: 'any_name',
            email: 'any_email',
            balance: 1235547999884,
            password: 'any_password',

        },
        {
            id: 4,
            endDate: null,
            createDate: new Date('18/12/1996'),
            name: 'any_name',
            email: 'any_email',
            balance: 1235547999884,
            password: 'any_password',

        },
        ]
    }
}

