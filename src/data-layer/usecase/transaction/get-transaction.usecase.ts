import { IUseCase } from "@/domain/use-case/usecase";
import { GetTransactionInput } from "../../../domain/inputAndOutput";
import { ITransactionRepository } from "../../../domain/repository/ITransactionRepository";

export class GetTransactionUseCase implements IUseCase<GetTransactionInput, any> {

    constructor(private readonly _transactionRepostiry: ITransactionRepository) { }
    async execute(input: GetTransactionInput): Promise<any> {
        const transaction = await this._transactionRepostiry.getByMonth(input);

        return transaction;
    }

}