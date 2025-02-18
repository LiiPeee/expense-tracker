import { GetTransactionInput } from "../inputAndOutput";

export abstract class IGetTransactionUseCase {
    abstract execute(input: GetTransactionInput): Promise<any>;
}
