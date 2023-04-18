import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: 'Invalid email',
    },
    unique: [true, 'Email already in use'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
  },
  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
  },
  location: {
    type: String,
    maxlength: 20,
    trim: 'true',
    default: 'Egypt',
  },
});

const User = mongoose.model('User', UserSchema);

export default User;
