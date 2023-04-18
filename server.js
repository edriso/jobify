import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/connect.js';
// middleware
import notFoundMiddleware from './middleware/notFound.js';
import errorHandlerMiddleware from './middleware/errorHandler.js';

dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome!');
});

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
