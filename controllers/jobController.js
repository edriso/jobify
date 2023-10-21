import Job from '../models/jobModel.js';

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(200).json({ jobs });
};

const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(201).json({ message: 'new job created', job });
};

const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.status(200).json({ job });
};

const updateJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ message: 'job updated', job });
};

const deleteJob = async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  res.status(204).json({ message: 'job deleted' });
};

const showStats = async (req, res) => {
  res.status(200).json('showStats');
};

export default {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
  showStats,
};
