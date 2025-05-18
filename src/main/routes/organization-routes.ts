import { Router } from 'express';
import { adaptRoute } from '../adapters/express-adapter';
import { makeCreateOrganizationFactory } from '../factories/organization/create-organization.factory';

export const organizationRouter = async (router: Router): Promise<void> => {
  router.post('/organization', adaptRoute(await makeCreateOrganizationFactory()));
};
