import express from 'express';
import jobController from '../controllers/jobController.js';
import {
  validateIdParam,
  validateJobInput,
} from '../middleware/validationMiddleware.js';
import CheckJobExistenceMiddleware from '../middleware/CheckJobExistenceMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(jobController.getAllJobs)
  .post([validateJobInput], jobController.createJob);
router.route('/stats').get(jobController.showStats);
router
  .route('/:id')
  .get([validateIdParam, CheckJobExistenceMiddleware], jobController.getJob)
  .patch(
    [validateIdParam, CheckJobExistenceMiddleware, validateJobInput],
    jobController.updateJob
  )
  .delete(
    [validateIdParam, CheckJobExistenceMiddleware],
    jobController.deleteJob
  );

export default router;
