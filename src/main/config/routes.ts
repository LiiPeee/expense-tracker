import { Express, Router } from "express";
import { accountRouter } from "../routes/accounts-routes";
import { categoryRouter } from "../routes/category-routes";
import { contactRouter } from "../routes/contact-routes";
import { transactionRouter } from "../routes/transaction-routes";

export default (app: Express): void => {
  const router = Router();
  app.use("/api", router);

  accountRouter(router);
  transactionRouter(router);
  categoryRouter(router);
  contactRouter(router);
};
