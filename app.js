import express from 'express';
import 'express-async-errors';
// routers
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';
// middleware
import notFoundMiddleware from './middleware/notFound.js';
import errorHandlerMiddleware from './middleware/errorHandler.js';

const app = express();

app.use(express.json());

app.get('/api/v1', (req, res) => {
  res.send('<h1>Jobify API!</h1>');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

export default app;
