import { IContact } from '../../entity/contact';
import { IUseCase } from '../usecase';

export interface GetTransactionByContactInput {
  emailContact: string;
}
export type GetTransactionOutPut = { contact: IContact };

export abstract class IGetTransactionByContactUseCase
  implements IUseCase<GetTransactionByContactInput, GetTransactionOutPut>
{
  abstract execute(input: GetTransactionByContactInput): Promise<GetTransactionOutPut>;
}
