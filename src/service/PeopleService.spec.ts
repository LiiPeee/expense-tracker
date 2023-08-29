import { PeopleFakeRepository } from "../test/FakeRepository";
import { PeopleService } from "./PeopleService";


describe("Create people Sucess", () => {

	it("Usecase suscess of People", async () => {
		const peopleRepositoryFake = new PeopleFakeRepository();
		const peopleService = new PeopleService(peopleRepositoryFake);
		const person = {id: '1', firstName: 'john', lastName: 'doe', email: 'john@doe.com', birthDate: new Date(18-12-1999), balanceMonth: 12000}

		const people = await peopleService.createPeople(person);
		expect(people).toEqual({id: '1', firstName: 'john', lastName: 'doe', email: 'john@doe.com', birthDate: new Date(18-12-1999), balanceMonth: 12000})

	})
	it('Get People by id', async () => {

		const peopleFake = new PeopleFakeRepository();
		const people = new PeopleService(peopleFake);
		const getPeople = await people.getPeople('1')
		expect(getPeople).not.toBeNull();
	})

	// testar caso venha faltando o campo firstName usando o TDD

	it('Create new people with dont exist firstName', async ()=>{
		const peopleFake = new PeopleFakeRepository();
		const peopleService = new PeopleService(peopleFake);
		const person ={
			id: '1',
			firstName: null,
			lastName: 'Doe',
			email: 'jhonDoe@gmail.com',
			birthDate: new Date(15-10-1999),
			balanceMonth: 1
		}
		const createPeople = await peopleService.createPeople(person);

		expect(createPeople).rejects.toThrow('Pessoa não pode ser criada sem o nome!')

	})
})