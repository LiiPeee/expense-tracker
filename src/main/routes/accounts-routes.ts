import { Router } from "express";
import { adaptRoute } from "../adapters/express-adapter";
import { makeAccountController } from "../factories/create-account-controller.factory";
import { makeSignUpController } from "../factories/sign-up-account.controller.factory";

export const accountRouter = (router: Router): void => {
  router.post("/account", adaptRoute(makeAccountController()));
  router.post("/sign-up", adaptRoute(makeSignUpController()));

  // router.get(
  //   "/account/:email",
  //   accountController.findAccountByEmail.bind(accountController)
  // );
};
