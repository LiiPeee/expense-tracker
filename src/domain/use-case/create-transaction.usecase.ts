import { TransctionDto } from "../dto/transaction-dto";
import { CreateTransactionInput } from "../inputAndOutput";

export abstract class ICreateTransactionUseCase {
  abstract create(
    email: string,
    input: CreateTransactionInput
  ): Promise<TransctionDto>;
}
