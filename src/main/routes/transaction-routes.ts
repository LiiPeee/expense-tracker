import { Router } from 'express';
import { adaptRoute } from '../adapters/express-adapter';
import { makeCreateTransactionController } from '../factories/transaction/create-transaction.factory';
import { makeGetTransactionByMonthController } from '../factories/transaction/get-by-month-transaction.factory';

export const transactionRouter = async (router: Router): Promise<void> => {
  router.post('/transaction', adaptRoute(await makeCreateTransactionController()));

  router.get('/transaction-by-month', adaptRoute(await makeGetTransactionByMonthController()));
};
