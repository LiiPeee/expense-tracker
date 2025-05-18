import dotenv from 'dotenv';
import { Express } from 'express';
import { setupApp } from './config/app';

dotenv.config();

const startServer = async (): Promise<void> => {
  const app: Express = await setupApp();

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
};

startServer().catch((error) => {
  console.error('Failed to start server:', error);
});
