import { Router } from "express";
import { adaptRoute } from "../adapters/express-adapter";
import { makeAccountController } from "../factories/account-controller.factory";

export const accountRouter = (router: Router): void => {
  router.post("/account", adaptRoute(makeAccountController()));
  // router.get(
  //   "/account/:email",
  //   accountController.findAccountByEmail.bind(accountController)
  // );
};
