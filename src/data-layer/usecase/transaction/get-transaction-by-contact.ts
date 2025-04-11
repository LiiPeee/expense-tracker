import { ITransactionRepository } from "../../../domain/repository/ITransactionRepository";

export class GetTransactionByContact {
    constructor(private readonly transactionRepository: ITransactionRepository) { }
    async execute(input: any): Promise<any> {
        const contact = await this.transactionRepository.getTransactionByContact(input.email);
        return contact;
    }
}