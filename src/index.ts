import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import { routerAccount } from "./presentation/routes/accounts-routes";
// import {router} from '../src/routes/Router'

dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());

// app.use("", routerTransaction);
app.use("", routerAccount);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
