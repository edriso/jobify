import mongoose from 'mongoose';
import Job from '../models/jobModel.js';
import dayjs from 'dayjs';

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
  let stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$jobStatus', count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    acc[curr._id] = curr.count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ]);

  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = dayjs()
        .month(month - 1)
        .year(year)
        .format('MMM YY');
      return { date, count };
    })
    .reverse();

  res.status(200).json({ defaultStats, monthlyApplications });
};

export default {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
  showStats,
};
