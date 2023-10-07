import { Transaction } from "../model/Transaction"
export class Account {

    constructor(public id: number,
        public endDate: Date,
        public createDate: Date,
        public name: string,
        public email: string,
        public balance: number,
        public transacao?: Transaction,
        public password?: string) { }
}