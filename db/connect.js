import mongoose from 'mongoose';

const connectDB = (url) => {
  return mongoose.connect(url).then(() => console.log('Connected to DB...'));
};

export default connectDB;
