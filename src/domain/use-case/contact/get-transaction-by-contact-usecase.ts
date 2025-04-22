import { ITransaction } from '../../entity/transaction';
import { IUseCase } from '../usecase';

export interface GetTransactionByContactInput {
  emailContact: string;
}
export type GetTransactionOutPut = { transaction: ITransaction };

export abstract class IGetTransactionByContactUseCase
  implements IUseCase<GetTransactionByContactInput, GetTransactionOutPut>
{
  abstract execute(input: GetTransactionByContactInput): Promise<any>;
}
