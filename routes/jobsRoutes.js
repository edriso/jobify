import express from 'express';
import jobsController from '../controllers/jobsController.js';

const router = express.Router();

router.route('/').get(jobsController.getAllJobs).post(jobsController.createJob);
router.route('/stats').get(jobsController.showStats);
router
  .route('/:id')
  .get(jobsController.getJob)
  .patch(jobsController.updateJob)
  .delete(jobsController.deleteJob);

export default router;
