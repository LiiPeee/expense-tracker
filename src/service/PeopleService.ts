import { People } from '../model/People'
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export const  PeopleService = {
    
    async createPeople(input: any): Promise<People | null> {
        const id = input.id;
        const firstName = input.firstName;
        const lastName = input.lastName;
        const email = input.email;
        const birthDate = input.birthDate
        const balanceMonth = input.balanceMonth

        const people = await prisma.people.create({
            data:{
                id,
                firstName,
                lastName,
                email,
                birthDate: new Date().toISOString(),
                balanceMonth
            },
        })
        return people;
    },
    async getPeople(input:any): Promise<People | null>{
        const email = input.email;
        const people = await prisma.people.findUnique({
            where:{
                email,
            }
        })
        return people;
    }
}
