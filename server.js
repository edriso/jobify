import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/connect.js';
import app from './app.js';

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL).then(() =>
      console.log('Connected to DB...')
    );
    app.listen(port, () => console.log(`Server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
