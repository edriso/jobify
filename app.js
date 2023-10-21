import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
// routers
import authRouter from './routes/authRoutes.js';
import jobRouter from './routes/jobRoutes.js';
// middleware
import notFoundMiddleware from './middleware/notFoundMiddleware.js';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.get('/api/v1', (req, res) => {
  res.send('<h1>Jobify API!</h1>');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

export default app;
