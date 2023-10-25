import User from '../models/userModel.js';
import { UnauthenticatedError } from '../errors/customErrors.js';
import { comparePassword, hashPassword } from '../utils/passwordUtils.js';
import { createJWT } from '../utils/tokenUtils.js';

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

  const token = createJWT({ userId: user._id, role: user.role });

  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay), // similar to JWT_EXPIRES_IN but in milliseconds
    secure: process.env.NODE_ENV === 'production',
  });
  res.status(200).json({ message: 'user logged in' });
};

const logout = (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({ message: 'logout' });
};

export default { register, login, logout };
