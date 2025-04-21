import { ITransaction } from '../../entity/transaction';
import { IUseCase } from '../usecase';

export interface GetAllTransactionInput {
  email: string;
}

export type GetTransactionOutPut = { transaction: ITransaction };

export abstract class IGetAllTransactionByAccountUseCase
  implements IUseCase<GetAllTransactionInput, GetTransactionOutPut>
{
  abstract execute(input: GetAllTransactionInput): Promise<GetTransactionOutPut>;
}
