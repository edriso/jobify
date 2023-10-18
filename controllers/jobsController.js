import crypto from 'crypto';

const getAllJobs = async (req, res) => {
  let jobs = [
    { id: crypto.randomUUID(), company: 'google', position: 'backend' },
    { id: crypto.randomUUID(), company: 'apple', position: 'frontend' },
  ];

  res.status(200).json(jobs);
};

const createJob = async (req, res) => {
  res.status(201).json('createJob');
};

const updateJob = async (req, res) => {
  res.status(200).json('updateJob');
};

const deleteJob = async (req, res) => {
  res.status(204).json('deleteJob');
};

const showStats = async (req, res) => {
  res.status(200).json('showStats');
};

export default { getAllJobs, createJob, updateJob, deleteJob, showStats };
