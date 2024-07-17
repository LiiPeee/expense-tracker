import { TransctionDto } from "../dto/transaction-dto";
import { CreateTransactionInput } from "../inputAndOutput";

export abstract class ICreateTransactionUseCase {
  abstract execute(

    input: CreateTransactionInput
  ): Promise<TransctionDto>;
}
