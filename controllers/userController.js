import User from '../models/userModel.js';
import Job from '../models/jobModel.js';
import { UnauthorizedError } from '../errors/customErrors.js';

const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user.userId);
  res.status(200).json({ user: user.excludePassword() });
};

const getApplicationStats = async (req, res) => {
  const isAdmin = req.user.role === 'admin';
  if (!isAdmin)
    throw new UnauthorizedError('not authorized to access this route');
  res.status(200).json({ message: 'getApplicationStats' });
};

const updateUser = async (req, res) => {
  delete req.body.password;
  await User.findByIdAndUpdate(req.user.userId, req.body);
  res.status(200).json({ message: 'user updated' });
};

export default {
  getCurrentUser,
  getApplicationStats,
  updateUser,
};
