import Job from '../models/jobModel.js';
import { NotFoundError } from '../errors/customErrors.js';

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(200).json({ jobs });
};

const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(201).json({ msg: 'new job created', job });
};

const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) throw new NotFoundError({ msg: `no job with id ${id}` });

  res.status(200).json({ job });
};

const updateJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!job) throw new NotFoundError({ msg: `no job with id ${id}` });

  res.status(200).json({ msg: 'job updated', job });
};

const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndDelete(id);
  if (!job) throw new NotFoundError({ msg: `no job with id ${id}` });

  res.status(204).json({ msg: 'job deleted' });
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
