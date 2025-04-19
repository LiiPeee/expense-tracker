import { IUseCase } from "../usecase";

export interface GetTransactionByContactInput {
  contactName: string;
}
// export type GetTransactionOutPut = { transaction: ITransaction };

export abstract class IGetTransactionByContactUseCase implements IUseCase<GetTransactionByContactInput, any> {
  abstract execute(input: GetTransactionByContactInput): Promise<any>;
}
