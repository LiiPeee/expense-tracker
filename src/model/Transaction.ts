import { Category } from "./Category";
import { Contact } from "./Contact";

export class Transaction {
    constructor(
        public id: number,
        public createDate: Date,
        public endDate: Date,
        public value: string,
        public formatPayment: string,
        public paid: string,
        public contact: Contact,
        public category: Category,
		public comment?	: string
    ) { }
}