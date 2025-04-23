import express, { Express } from 'express';
import setupMiddleware from './middlewares';
import setupRoutes from './routes';
export const setupApp = async (): Promise<Express> => {
  const app = express();

  setupMiddleware(app);
  setupRoutes(app);

  return app;
};
