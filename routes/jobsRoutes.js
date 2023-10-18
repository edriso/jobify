import express from 'express';
import {
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from '../controllers/jobsController.js';

const router = express.Router();

router.route('/').get(getAllJobs).post(createJob);

router.route('/stats').get(showStats);

router.route('/:id').patch(updateJob).delete(deleteJob);

export default router;
