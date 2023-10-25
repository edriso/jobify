import User from '../models/userModel.js';
import Job from '../models/jobModel.js';
import { UnauthorizedError } from '../errors/customErrors.js';

const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user.userId);
  res.status(200).json({ user: user.excludePassword() });
};

const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  res.status(200).json({ users, jobs });
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
