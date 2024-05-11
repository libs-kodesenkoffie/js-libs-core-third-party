import express, { json, urlencoded } from 'express';
import { customerRoutes } from './routes';
import { errorHandler } from './utils/error.handler';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server up and running' });
});

const API_PREFIX = process?.env?.API_PREFIX || 'api';
app.use(`/${API_PREFIX}/customers`, customerRoutes);

app.use(errorHandler);
export default app;
