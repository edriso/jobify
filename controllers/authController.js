import User from '../models/userModel.js';
import {
  BadRequestError,
  UnauthenticatedError,
} from '../errors/customErrors.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError('Some values missing');
  }

  const userAlreadyExist = await User.findOne({ email });

  if (userAlreadyExist) {
    throw new BadRequestError('Email already in use');
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();

  res.status(201).json({
    user: {
      name: user.name,
      email: user.email,
      location: user.location,
    },
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('All values must be provided');
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials');
  }

  const token = user.createJWT();

  user.password = undefined;

  res.status(200).json({
    user,
    token,
  });

  console.log(user);
};

const updateUser = async (req, res) => {
  res.send('updateUser');
};

export default { register, login, updateUser };
