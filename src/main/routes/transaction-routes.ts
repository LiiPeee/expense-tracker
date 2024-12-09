import { Router } from "express";
import { adaptRoute } from "../adapters/express-adapter";
import { makeCreateTransactionController } from "../factories/transaction/create-transaction-controller.factory";
import { makeGetTransactionController } from "../factories/transaction/get-/transaction-controller.factory";

export const transactionRouter = async (router: Router): Promise<void> => {
  router.post("/transaction", adaptRoute(await makeCreateTransactionController()));
  router.get("/transaction", adaptRoute(await makeGetTransactionController()));

};
