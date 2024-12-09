import { GetTransactionInput } from "../../../domain/inputAndOutput";
import { ITransactionRepository } from "../../../domain/repository/ITransactionRepository";
import { UseCase } from "../../../domain/use-case/usecase";

export class GetTransactionUseCase implements UseCase<GetTransactionInput, any> {

    constructor(private readonly _transactionRepostiry: ITransactionRepository) { }
    async execute(input: GetTransactionInput): Promise<any> {
        const transaction = await this._transactionRepostiry.getByMonth(input);

        return transaction;
    }

}