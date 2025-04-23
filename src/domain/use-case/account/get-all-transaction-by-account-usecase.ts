import { IUseCase } from '../usecase';

export interface GetAllTransactionAccountInput {
  email: string;
}
// export type GetAllTransactionAccountOutPut = { account: IAccount[] };

export abstract class IGetAllTransactionByAccountUseCase implements IUseCase<GetAllTransactionAccountInput, any> {
  abstract execute(input: GetAllTransactionAccountInput): Promise<any>;
}
