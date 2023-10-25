import Job from '../models/jobModel.js';

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(200).json({ jobs });
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(201).json({ message: 'new job created', job });
};

const getJob = async (req, res) => {
  res.status(200).json({ job: req.job });
};

const updateJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ message: 'job updated', job });
};

const deleteJob = async (req, res) => {
  await req.job.deleteOne();
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
