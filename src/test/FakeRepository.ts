import { People } from "../model/People";
import { PeopleRepository } from "../repository/PeopleRepository";


export class PeopleFakeRepository implements PeopleRepository {
    public person: People[] = [];

    async createPeople(data: any): Promise<People | any> {
        this.person.push({
            id: data.id,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            birthDate: data.birthDate,
            balanceMonth: data.balanceMonth
        })

}
    async getPeople(input: any): Promise < People | any > {
    const { id } = input
        const people = this.person.find((people) => people.id === id)

        return people;
}
    async updatePeople(id: any, data: any): Promise < People | any > {

    throw new Error('not implemented')


}
    async deletePeople(id: any): Promise < People | any > {
    throw new Error('not implemented')

}
}