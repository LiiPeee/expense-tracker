import { Request } from 'express';
import { IUpdateBalanceInstallmentsUseCase } from '../../../domain/use-case/account/update-balance-installments-usecase';
import { Controller } from '../../protocols/controller';
import { HttpResponse } from '../../protocols/http';
import { badRequest, ok, serverError } from '../../response/helper';

export class UpdateBalanceInstallmentsListener  {
  constructor(private readonly usecase: IUpdateBalanceInstallmentsUseCase) {}
  async handle(): Promise<void> {
    try {


      const result = await this.usecase.execute();
    } catch  {
       console.info("error in UpdateBalanceInstallments")
    }
  }
}
