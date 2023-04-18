import dotenv from 'dotenv';
import express from 'express';
// db and authenticateUser
import connectDB from './db/connect.js';
// routers
import authRouter from './routes/authRoutes.js';
// middleware
import notFoundMiddleware from './middleware/notFound.js';
import errorHandlerMiddleware from './middleware/errorHandler.js';

dotenv.config();
const app = express();

app.use(express.json());

app.get('/api/v1', (req, res) => {
  res.send('Jobify API!');
});

app.use('/api/v1/auth', authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
