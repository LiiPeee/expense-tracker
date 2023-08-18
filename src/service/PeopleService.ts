import { People } from '../model/People'
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export class PeopleService  {
    
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
    }
    async getPeople(input:any): Promise<People | null>{
        const id = input.id;
        const people = await prisma.people.findUnique({
            where:{
                id,
            }
        })
        return people;
    }
    async updatePeople(id: any, data: any): Promise<People| any>{

        const people = await prisma.people.update({
            where:{
                id,
            }, 
            data,
            select:{
                birthDate: true,
                email: true,
                balanceMonth: true,
            }
        })
        return people;

    }
    async deletePeople(id: any): Promise<People| any>{

        const people = await prisma.people.delete({
            where:{
                id,
            }, 
        })
        return people;

    }
}
