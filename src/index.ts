import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import {router} from '../src/controllers/PeopleController'
import cors from 'cors';
// import {router} from '../src/routes/Router'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json())

app.use('/api', router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});