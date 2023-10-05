
export class Category {
    constructor(
        public id: number,
        public createDate: Date,
        public endDate: Date,
        public typeTransaction: string,
        public recurrence: string,
    ) { }
}