import { makeCreateTransactionDayController } from "@/main/factories/transaction/create-transaction.factory";
import { Router } from "express";
import { adaptRoute } from "../adapters/express-adapter";
import { makeGetTransactionByMonthController } from "../factories/transaction/get-by-month-transaction.factory";

export const transactionRouter = async (router: Router): Promise<void> => {
  router.post("/transaction-day", adaptRoute(await makeCreateTransactionDayController()));

  router.get("/transaction-by-month", adaptRoute(await makeGetTransactionByMonthController()));
};
