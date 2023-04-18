const getAllJobs = async (req, res) => {
  res.status(200).send('getAllJobs');
};

const createJob = async (req, res) => {
  res.status(201).send('createJob');
};

const updateJob = async (req, res) => {
  res.status(200).send('updateJob');
};

const deleteJob = async (req, res) => {
  res.status(204).send('deleteJob');
};

const showStats = async (req, res) => {
  res.status(200).send('showStats');
};

export default { getAllJobs, createJob, updateJob, deleteJob, showStats };
