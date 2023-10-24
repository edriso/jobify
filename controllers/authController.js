import User from '../models/userModel.js';
import { UnauthenticatedError } from '../errors/customErrors.js';
import { comparePassword, hashPassword } from '../utils/passwordUtils.js';

const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';
  req.body.password = await hashPassword(req.body.password);
  await User.create(req.body);
  res.status(201).json({ message: 'user created' });
};

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  // if (!user) throw new UnauthenticatedError('Invalid Credentials');
  // const isPasswordCorrect = await comparePassword(
  //   req.body.password,
  //   user.password
  // );
  // if (!isPasswordCorrect) throw new UnauthenticatedError('Invalid Credentials');
  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValidUser) throw new UnauthenticatedError('Invalid Credentials');

  user.password = undefined;
  res.status(200).json({ user });
};

const updateUser = async (req, res) => {
  res.json('updateUser');
};

export default { register, login, updateUser };
