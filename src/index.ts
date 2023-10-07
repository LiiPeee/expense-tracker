import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import { routerTransaction } from './routes/TransactionRoutes'
import cors from 'cors';
import { routerAccount } from './routes/AccountRoutes';
// import {router} from '../src/routes/Router'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json())

app.use('/transaction', routerTransaction)
app.use('/account', routerAccount);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});