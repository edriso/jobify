// import { promises as fs } from 'fs';
import User from '../models/userModel.js';
import Job from '../models/jobModel.js';
import { v2 as cloudinary } from 'cloudinary';
import { formatImage } from '../middleware/multerMiddleware.js';

const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user.userId);
  res.status(200).json({ user: user.excludePassword() });
};

const updateUser = async (req, res) => {
  const updatedUser = { ...req.body };
  delete updatedUser.password;
  if (req.file) {
    //// if image was saved on disk
    // const response = await cloudinary.uploader.upload(req.file.path);
    // await fs.unlink(req.file.path); // deletes the local img
    //// if image was saved on memory
    const file = formatImage(req.file);
    const response = await cloudinary.uploader.upload(file);

    updatedUser.avatar = response.secure_url;
    updatedUser.avatarPublicId = response.public_id;
  }

  const userBeforeUpdate = await User.findByIdAndUpdate(
    req.user.userId,
    updatedUser
  );
  // deleting old avatar on cloudinary if exists
  if (req.file && userBeforeUpdate.avatarPublicId) {
    await cloudinary.uploader.destroy(userBeforeUpdate.avatarPublicId);
  }
  res.status(200).json({ message: 'user updated' });
};

const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  res.status(200).json({ users, jobs });
};

export default {
  getCurrentUser,
  updateUser,
  getApplicationStats,
};
