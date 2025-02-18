import { Router } from "express";
import { adaptRoute } from "../adapters/express-adapter";
import { adaptRouteWithParam } from "../adapters/express-adapter-with-param";
import { makeCreateTransactionController } from "../factories/transaction/create-transaction.factory";
import { makeGetTransactionController } from "../factories/transaction/get-by-month-transaction.factory";
import { makeGetTransactionByContactController } from "../factories/transaction/get-transaction-by-contact-controller.factory";

export const transactionRouter = async (router: Router): Promise<void> => {
  router.post("/transaction", adaptRoute(await makeCreateTransactionController()));

  router.get("/transaction", adaptRoute(await makeGetTransactionController()));

  router.get("/transaction/:email", adaptRouteWithParam(await makeGetTransactionByContactController()));

};
