import { ITransaction } from '../../entity/transaction';
import { IUseCase } from '../usecase';

export interface GetTransactionByMonthInput {
  skip: number;
  take: number;
  id: number;
  year: number;
  month: number;
}

export type GetTransactionOutPut = { transaction: ITransaction };

export abstract class IGetTransactionByMonthUseCase
  implements IUseCase<GetTransactionByMonthInput, GetTransactionOutPut>
{
  abstract execute(input: GetTransactionByMonthInput): Promise<GetTransactionOutPut>;
}
