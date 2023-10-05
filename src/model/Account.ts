import { Transaction } from "../model/Transaction"
export class Account {

    constructor(public id: number,
        public endDate: Date,
        public createDate: Date,
        public name: string,
        public password: string,
        public balance: number,
        public transacao: Transaction) { }
}