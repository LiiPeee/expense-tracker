import { CreateTransactionInput } from "../inputAndOutput";
import { TransctionDto } from "../models/dto/create-transaction-dto";

export abstract class ICreateTransactionUseCase {
  abstract execute(
    input: CreateTransactionInput
  ): Promise<TransctionDto>;
}
