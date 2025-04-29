import { IUpdateBalanceDayAcountUseCase } from '../../../domain/use-case/account/update-balance-day-usecase';
import { badRequest, serverError } from '../../response/helper';

export class UpdateBalanceAccounListener {
  constructor(private readonly usecase: IUpdateBalanceDayAcountUseCase) {}
  async handle() {
    try {
      await this.usecase.execute();
    } catch (error: any) {
      if (badRequest(error)) return badRequest(error);
      return serverError(error);
    }
  }
}
