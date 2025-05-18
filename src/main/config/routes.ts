import { Express, Router } from 'express';
import { accountRouter } from '../routes/accounts-routes';
import { addressRouter } from '../routes/address-routes';
import { categoryRouter } from '../routes/category-routes';
import { contactRouter } from '../routes/contact-routes';
import { organizationRouter } from '../routes/organization-routes';
import { transactionRouter } from '../routes/transaction-routes';

export default (app: Express): void => {
  const router = Router();
  app.use('/api/v1', router);

  accountRouter(router);
  transactionRouter(router);
  categoryRouter(router);
  contactRouter(router);
  addressRouter(router);
  organizationRouter(router);
};
