import { People } from '../model/People'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export class PeopleRepository {

    async createPeople(data: People): Promise<People>{ 

        let people = await prisma.people.create({
            data:{
                ...data
            }
        })
        return people;
    }
    async getPeople(input: any): Promise<People | null> {
        const id = input.id;
        const people = await prisma.people.findUnique({
            where: {
                id,
            }
        })
        return people;
    }
    async updatePeople(id: any, data: any): Promise<People | any> {

        const people = await prisma.people.update({
            where: {
                id,
            },
            data,
            select: {
                birthDate: true,
                email: true,
                balanceMonth: true,
            }
        })
        return people;

    }
    async deletePeople(id: any): Promise<People | any> {

        const people = await prisma.people.delete({
            where: {
                id,
            },
        })
        return people;

    }
}
