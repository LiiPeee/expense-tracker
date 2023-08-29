import { People } from "../model/People";
import { PeopleRepository } from "../repository/PeopleRepository";


export class PeopleFakeRepository implements PeopleRepository {
    public person = [{ id: '1', firstName: 'Jhon', lastName: 'Doe', email: 'jhon@gmail.com', birthDate: 18181999, balanceMonth: 120000 }];

    async createPeople(data: any): Promise<People | any> {
        return data;

    }
    async getPeople(input: any): Promise<People | any> {
        const id  = input;
        const people = this.person.find((people) => people.id == id)

        return people;
    }
    async updatePeople(id: any, data: any): Promise<People | any> {

        throw new Error('not implemented')


    }
    async deletePeople(id: any): Promise<People | any> {
        throw new Error('not implemented')

    }
}