import { Router } from "express";
import { adaptRoute } from "../adapters/express-adapter";
import { makeAccountController } from "../factories/account/create-account-controller.factory";
import { makeSignUpController } from "../factories/account/sign-up-account.controller.factory";

export const accountRouter = async (router: Router): Promise<void> => {
  router.post("/account", adaptRoute(await makeAccountController()));
  router.post("/sign-up", adaptRoute(await makeSignUpController()));

  // router.get(
  //   "/account/:email",
  //   accountController.findAccountByEmail.bind(accountController)
  // );
};
