import User from '../models/userModel.js';
import Job from '../models/jobModel.js';

const getCurrentUser = async (req, res) => {
  res.status(200).json({ message: 'getCurrentUser' });
};

const getApplicationStats = async (req, res) => {
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
