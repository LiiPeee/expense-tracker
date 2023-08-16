export class People{
     id: string;
     firstName: string;
     lastName: string;
     email: string;
     birthDate: Date;
     balance: number;

    constructor(id: string, firstName: string,lastName: string, email: string, birthDate: Date, balance: number){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthDate = birthDate;
        this.balance = balance;

    }
}