import { ITransaction } from "../entity/transaction";
import { GetTransactionInput } from "../inputAndOutput";

// export interface CreateTransaction {
//   value?: number;
//   formatPayment?: string;
//   paid?: boolean;
//   recurrence: Recurrence;
//   category: ICategory;
//   comment?: string;
//   number_of_installments: number;
// }

export abstract class ITransactionRepository {
  abstract getByMonth(input: GetTransactionInput): Promise<any>;

  abstract create(input: ITransaction): Promise<any>;
}
