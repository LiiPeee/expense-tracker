import { Router } from "express";
import { adaptRoute } from "../adapters/express-adapter";
import { makeCreateTransactionController } from "../factories/transaction/create-transaction-controller.factory";

export const transactionRouter = (router: Router): void => {
  router.post("/transaction", adaptRoute(makeCreateTransactionController()));
};
