import express from 'express';
import jobController from '../controllers/jobController.js';
import { validateJob } from '../middleware/validationMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(jobController.getAllJobs)
  .post(validateJob, jobController.createJob);
router.route('/stats').get(jobController.showStats);
router
  .route('/:id')
  .get(jobController.getJob)
  .patch(validateJob, jobController.updateJob)
  .delete(validateJob, jobController.deleteJob);

export default router;
