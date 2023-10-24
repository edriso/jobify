import User from '../models/userModel.js';
import {
  BadRequestError,
  UnauthenticatedError,
} from '../errors/customErrors.js';
import { hashPassword } from '../utils/passwordUtils.js';

const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';
  req.body.password = await hashPassword(req.body.password);
  await User.create(req.body);
  res.status(201).json({ message: 'user created' });
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
};

const updateUser = async (req, res) => {
  res.send('updateUser');
};

export default { register, login, updateUser };
