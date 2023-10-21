import Job from '../models/jobModel.js';
import { NotFoundError } from '../errors/customErrors.js';

const CheckJobExistenceMiddleware = async (req, res, next) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) throw new NotFoundError(`no job with id ${id}`);

  req.job = job;
  next();
};

export default CheckJobExistenceMiddleware;
