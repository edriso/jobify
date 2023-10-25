import User from '../models/userModel.js';
import Job from '../models/jobModel.js';
import { UnauthorizedError } from '../errors/customErrors.js';

const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user.userId);
  res.status(200).json({ user: user.hidePassword() });
};

const getApplicationStats = async (req, res) => {
  const isAdmin = req.user.role === 'admin';
  if (!isAdmin)
    throw new UnauthorizedError('not authorized to access this route');
  res.status(200).json({ message: 'getApplicationStats' });
};

const updateUser = async (req, res) => {
  res.status(200).json({ message: 'updateUser' });
};

export default {
  getCurrentUser,
  getApplicationStats,
  updateUser,
};
