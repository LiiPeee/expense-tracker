import { People } from '../model/People'
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { PeopleRepository } from '../repository/PeopleRepository';
const prisma = new PrismaClient();

export class PeopleService {
    constructor(
        private readonly peopleRepository: PeopleRepository
    ) { }

    async createPeople(input: any): Promise<People | null> {
        const people = await this.peopleRepository.createPeople(input)
				if(!people.firstName){
					throw new Error('Pessoa não pode ser criada sem o nome!')
				}
        return people;
    }
    async getPeople(input: any): Promise<People | null> {
        const id = input;
        const people = await this.peopleRepository.getPeople({ id })
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
