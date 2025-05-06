import { Router } from 'express';
import { adaptRoute } from '../adapters/express-adapter';
import { makeAccountController } from '../factories/account/create-account-controller.factory';
import { makeGetTransactionAccountController } from '../factories/account/get-all-transaction-by-account-controller.factory';
import { makeSignUpController } from '../factories/account/sign-up-account.controller.factory';
import { makeUpdateBalanceInstallmentsListener } from '../factories/account/update-balance-installments.factory';
import { makeUpdateBalanceDayListener } from '../factories/account/update-balance-listener';

export const accountRouter = async (router: Router): Promise<void> => {
  router.post('/account', adaptRoute(await makeAccountController()));

  router.post('/sign-up', adaptRoute(await makeSignUpController()));

  router.get('/account/transaction', adaptRoute(await makeGetTransactionAccountController()));

  router.get('/installments', adaptRoute(await makeUpdateBalanceInstallmentsListener()));

  makeUpdateBalanceDayListener();
};
