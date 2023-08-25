import { PeopleFakeRepository } from "../test/FakeRepository";
import { PeopleService } from "./PeopleService";


describe("Create people Sucess", () => {
	let _peopleService: PeopleService;
	let mockDatabase = [{
		id: 2,
		firstName: 'jhon',
		lastName: 'Doe',
		email: 'luiznuubb@gmail.com',
		birthDate: '18-12-1999',
		balanceMonth: 155111
	}]

	beforeEach(()=>{
		const dependecies: any  = {
			peopleRepository:{
				getPeople:jest.fn(async()=>mockDatabase)
			}
		}
		_peopleService = new PeopleService(dependecies)
	})


	it("Usecase suscess of People", async () => {
	
		const people = _peopleService.getPeople({id: 2});
		expect(people).toEqual({
			id: 2,
			firstName: 'jhon',
			lastName: 'Doe',
			email: 'luiznuubb@gmail.com',
			birthDate: '18-12-1999',
			balanceMonth: 155111
		})

	})
	it('Get People by id', async () => {

		const peopleFake = new PeopleFakeRepository();
		const people = new PeopleService(peopleFake);
		const getPeople = await people.getPeople({ id: '1' })

		const person = [{
			id: "1",
			firstName: "Felipe",
			lastName: 'Junior',
			email: 'luiznuubb@gmail.com',
			birthDate: '18-12-1999',
			balanceMonth: 15500
		}]

		// TO DO: não esta pegando pois getpeople do repository Fake é um metodo

		expect(getPeople).toEqual({ person })
	})
})