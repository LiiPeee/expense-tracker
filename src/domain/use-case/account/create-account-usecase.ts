import { IAccount } from '../../entity/account';
import { IUseCase } from '../usecase';

export interface CreateAccountInput {
  name: string;
  email: string;
  password: string;
}
export type CreateAccountOutPut = { account: IAccount };

export abstract class ICreateAccountUseCase implements IUseCase<CreateAccountInput, CreateAccountOutPut> {
  abstract execute(input: CreateAccountInput): Promise<CreateAccountOutPut>;
}
