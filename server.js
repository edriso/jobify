import 'dotenv/config';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import 'express-async-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { v2 as cloudinary } from 'cloudinary';
import connectDB from './db/connect.js';
// routers
import authRouter from './routes/authRouter.js';
import jobRouter from './routes/jobRouter.js';
import userRouter from './routes/userRouter.js';
// middlewares
import notFoundMiddleware from './middleware/notFoundMiddleware.js';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './public')));
app.use(cookieParser()); // to be able to access cookies
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/api/v1', (req, res) => {
  res.send('<h1>Jobify API!</h1>');
});
app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
