import express from 'express';
import jobController from '../controllers/jobController.js';
import {
  validateIdParam,
  validateJobInput,
} from '../middleware/validationMiddleware.js';
import CheckJobExistenceMiddleware from '../middleware/CheckJobExistenceMiddleware.js';
import { restrictDemoUserAccess } from '../middleware/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(jobController.getAllJobs)
  .post([restrictDemoUserAccess, validateJobInput], jobController.createJob);

router.route('/stats').get(jobController.showStats);

router
  .route('/:id')
  .get([validateIdParam, CheckJobExistenceMiddleware], jobController.getJob)
  .patch(
    [
      restrictDemoUserAccess,
      validateIdParam,
      CheckJobExistenceMiddleware,
      validateJobInput,
    ],
    jobController.updateJob
  )
  .delete(
    [restrictDemoUserAccess, validateIdParam, CheckJobExistenceMiddleware],
    jobController.deleteJob
  );

export default router;
