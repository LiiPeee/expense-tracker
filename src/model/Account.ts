import { Transaction } from "../model/Transaction";
export class Account {

    constructor(public id: number,
        public endDate: Date,
        public createDate: Date,
        public name: string,
        public email: string,
        public balance: number,
        public password: string,
        public token?: string,
        public transacao?: Transaction,
    ) { }
}