import { Express, Router } from "express";
import { accountRouter } from "../routes/accounts-routes";
import { transactionRouter } from "../routes/transaction-routes";

export default (app: Express): void => {
  const router = Router();
  app.use("/api", router);

  accountRouter(router);
  transactionRouter(router);
};
