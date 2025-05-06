import { IUseCase } from '../usecase';

export interface UpdateBalanceInstallmentsInput {
  accountId: string;
}

export interface UpdateBalanceInstallmentsOutPut {
  menssage: string;
}

export abstract class IUpdateBalanceInstallmentsUseCase
  implements IUseCase<UpdateBalanceInstallmentsInput, UpdateBalanceInstallmentsOutPut>
{
  abstract execute(input: UpdateBalanceInstallmentsInput): Promise<UpdateBalanceInstallmentsOutPut>;
}
