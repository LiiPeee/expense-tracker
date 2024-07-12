import dotenv from "dotenv";
import { Express } from "express";
import { setupApp } from "./config/app";

import * as schedule from "node-schedule";

dotenv.config();

const startServer = async (): Promise<void> => {
  const rule = new schedule.RecurrenceRule();
  rule.minute = new schedule.Range(0, 59, 1);
  schedule.scheduleJob(rule, function () {
    console.log("Server is on");
  });
  const app: Express = await setupApp();

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server:", error);
});
