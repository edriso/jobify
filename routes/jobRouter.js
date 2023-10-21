import express from 'express';
import jobController from '../controllers/jobController.js';
import {
  validateJobIdAndCheckExistence,
  validateJobInput,
} from '../middleware/validationMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(jobController.getAllJobs)
  .post([validateJobInput], jobController.createJob);
router.route('/stats').get(jobController.showStats);
router
  .route('/:id')
  .get([validateJobIdAndCheckExistence], jobController.getJob)
  .patch(
    [validateJobIdAndCheckExistence, validateJobInput],
    jobController.updateJob
  )
  .delete([validateJobIdAndCheckExistence], jobController.deleteJob);

export default router;
