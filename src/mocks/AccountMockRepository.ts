import { IAccountRepository } from "../repository/interface/IAcountRepository";

export class AccountMockRepository implements IAccountRepository {
    public data = [{
        "id": 2,
        "createDate": "2023-10-07T21:15:05.000Z",
        "endDate": "2023-10-07T21:15:05.000Z",
        "name": "Amanda aluiene Boco",
        "email": "amanda.luieny@gmail.com",
        "balance": 1000
    }]
    async createAccout(data: any){
        const { id } = data

        const account = this.data.find((data) => data.id === id)

        return account;
    }



}