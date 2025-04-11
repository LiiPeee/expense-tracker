import { CreateTransactionInput } from "../../inputAndOutput";
import { TransctionDto } from "../../models/entities/transaction";

export abstract class ICreateTransactionUseCase {
  abstract execute(
    input: CreateTransactionInput
  ): Promise<TransctionDto>;
}
