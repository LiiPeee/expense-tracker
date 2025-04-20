import { Router } from 'express';
import { adaptRoute } from '../adapters/express-adapter';
import { makeCreateContactFactory } from '../factories/contact/create-contact-factory';
import { makeGetContactFactory } from '../factories/contact/get-contact-factory';
// import { makeGetTransactionByContactController } from '../factories/transaction/get-transaction-by-contact-controller.factory';

export const contactRouter = async (router: Router): Promise<void> => {
  router.post('/contact', adaptRoute(await makeCreateContactFactory()));

  router.get('/contact', adaptRoute(await makeGetContactFactory()));

  // router.put("/contact", adaptRoute(await makeUpdateContactFactory()));

  // router.delete("/contact", adaptRoute(await makeDeleteContactFactory()));

  // router.get('/contact/:email', adaptRouteWithParam(await makeGetTransactionByContactController()));
};
