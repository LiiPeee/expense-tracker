import { ITransaction } from '../../../domain/entity/transaction';
import { ITransactionRepository } from '../../../domain/repository/ITransactionRepository';
import {
  IUpdateBalanceInstallmentsUseCase,
  UpdateBalanceInstallmentsInput,
  UpdateBalanceInstallmentsOutPut,
} from '../../../domain/use-case/account/update-balance-installments-usecase';

export class UpdateBalanceInstallmentsUseCase implements IUpdateBalanceInstallmentsUseCase {
  constructor(private readonly _transactionRepository: ITransactionRepository) {}

  async execute({ accountId }: UpdateBalanceInstallmentsInput): Promise<UpdateBalanceInstallmentsOutPut> {
    // Preciso pegar o account com transações
    //validar se existe transações com parcelamento para o mês em questão
    // se existir parcelamento fazer o update do balance

    const transactions: ITransaction[] = await this._transactionRepository.getMany(accountId);

    const thisMonth = new Date().getMonth();

    const valdate = transactions.forEach((element) => {
      let monthInstallment = new Date(element.installments_date).getMonth();
      if (monthInstallment === thisMonth) return 'sim';
    });
    return { menssage: 'something' };
  }
}
