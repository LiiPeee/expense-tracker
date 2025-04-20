import { Router } from 'express';
import { adaptRoute } from '../adapters/express-adapter';
import { makeCreateAddressFactory } from '../factories/address/create-address-factory';
import { makeGetAddressFactory } from '../factories/address/get-address-factory';

export const addressRouter = async (router: Router): Promise<void> => {
  router.post('/address', adaptRoute(await makeCreateAddressFactory()));

  router.get('/address', adaptRoute(await makeGetAddressFactory()));
};
