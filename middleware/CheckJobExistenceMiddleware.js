import Job from '../models/jobModel.js';
import { NotFoundError, UnauthorizedError } from '../errors/customErrors.js';

const CheckJobExistenceMiddleware = async (req, res, next) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) throw new NotFoundError(`no job with id ${id}`);
  const isAdmin = req.user.role === 'admin';
  const isOwner = req.body.userId === job.createdBy.toString();
  if (!isAdmin && !isOwner)
    throw new UnauthorizedError('not authorized to access this route');

  req.job = job;
  next();
};

export default CheckJobExistenceMiddleware;
