import mongoose from 'mongoose';
import validator from 'validator';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
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
    unique: true,
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

userSchema.pre('save', async function () {
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

userSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

const User = mongoose.model('User', userSchema);

export default User;
