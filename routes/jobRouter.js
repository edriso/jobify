import express from 'express';
import jobController from '../controllers/jobController.js';
import { validateJobInput } from '../middleware/validationMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(jobController.getAllJobs)
  .post(validateJobInput, jobController.createJob);
router.route('/stats').get(jobController.showStats);
router
  .route('/:id')
  .get(jobController.getJob)
  .patch(validateJobInput, jobController.updateJob)
  .delete(jobController.deleteJob);

export default router;
