import { IAccount } from '../../entity/account';
import { IUseCase } from '../usecase';

export interface GetAllTransactionAccountInput {
  email: string;
}
export type GetAllTransactionAccountOutPut = { account: IAccount };

export abstract class IGetAllTransactionByAccountUseCase
  implements IUseCase<GetAllTransactionAccountInput, GetAllTransactionAccountOutPut>
{
  abstract execute(input: GetAllTransactionAccountInput): Promise<GetAllTransactionAccountOutPut>;
}
