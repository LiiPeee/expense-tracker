import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import mongoose from "mongoose";
import { routerAccount } from "./routes/accounts-routes";
import { routerTransaction } from "./routes/transaction-routes";
// import {router} from '../src/routes/Router'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
mongoose.connect(
  `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD_MONGO}@apis.yx1v5sd.mongodb.net/?retryWrites=true&w=majority`
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/transaction", routerTransaction);
app.use("", routerAccount);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
